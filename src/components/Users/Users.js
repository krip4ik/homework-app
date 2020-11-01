import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import TableHeader from './TableHeader/TableHeader';
import Checkbox from '@material-ui/core/Checkbox';
import { useStyles } from '../config/index';
import * as Styled from './Users.style';

const Users = () => {
  const [loading, error, data, setData] = useFetch('https://api.github.com/users');
  const history = useHistory();
  const [selectedRows, setSelectedRows] = useState([]);
  const classes = useStyles();

  const handleClick = (id) => {
    const index = selectedRows.indexOf(id);
    if (index === -1) {
      setSelectedRows([...selectedRows, id]);
      return;
    }
    const shallow = [...selectedRows];
    shallow.splice(index, 1);
    setSelectedRows(shallow);
  };

  const getSelected = (id) => {
    return selectedRows.indexOf(id) !== -1;
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelectedRows(data.map((n) => n.id));
      return;
    }
    setSelectedRows([]);
  };

  const handleDeleteClick = () => {
    const valuesArr = data.filter(function (value) {
      return selectedRows.indexOf(value.id) === -1;
    });
    setData(valuesArr);
    sessionStorage.setItem('users', JSON.stringify(valuesArr, null, 2));
  };

  const onChangeHandler = (e, id) => {
    e.stopPropagation();
    const { value } = e.target;
    const newData = [...data];
    const updatedData = newData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          site_admin: value === 'true',
        };
      }
      return item;
    });

    setData(updatedData);
    sessionStorage.setItem('users', JSON.stringify(updatedData, null, 2));
  };

  if (loading || !data)
    return (
      <Styled.Container>
        <CircularProgress />
      </Styled.Container>
    );
  if (error) return <div>Upssss Error occured...</div>;

  return (
    <Styled.Container>
      <Button variant="contained" color="primary" onClick={() => history.push('/newuser')}>
        Add User +
      </Button>
      <Styled.TableContainer>
        <Table aria-labelledby="tableTitle" stickyHeader>
          <TableHeader
            numSelected={selectedRows.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={data.length}
          />
          <TableBody>
            {data.map(({ id, avatar_url, login, type, site_admin }) => {
              return (
                <TableRow
                  hover
                  onClick={() => handleClick(id)}
                  role="checkbox"
                  aria-checked={getSelected(id)}
                  tabIndex={-1}
                  key={id}
                  selected={getSelected(id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={getSelected(id)} />
                  </TableCell>
                  <TableCell align="left" size="small">
                    <Styled.Avatar src={avatar_url} />
                  </TableCell>
                  <TableCell align="left" size="small">
                    {login}
                  </TableCell>
                  <TableCell align="left" size="small">
                    {type}
                  </TableCell>
                  <TableCell align="left" size="small">
                    <FormControl className={classes.formControl}>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={site_admin.toString()}
                        onChange={(e) => onChangeHandler(e, id)}
                      >
                        <MenuItem value={'true'}>true</MenuItem>
                        <MenuItem value={'false'}>false</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Styled.TableContainer>
      {!!selectedRows.length && (
        <Styled.DeleteButton>
          <Button variant="contained" color="primary" onClick={() => handleDeleteClick()}>
            Delete
          </Button>
        </Styled.DeleteButton>
      )}
    </Styled.Container>
  );
};

export default Users;
