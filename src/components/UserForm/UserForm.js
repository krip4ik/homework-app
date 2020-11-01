import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import isURL from 'validator/lib/isURL';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { Button, Checkbox, FormControl, Select, MenuItem } from '@material-ui/core';
import { Form, Paragraph, FormContainer, Submit, Container, DropDown } from './UserForm.style';
import { useStyles } from '../config/index';

const NewUser = () => {
  const [formState, setFormState] = useState({
    avatar: '',
    nickName: '',
    userRole: '',
    isSiteAdmin: false,
  });
  const isValid = isURL(formState.avatar);
  const classes = useStyles();
  const history = useHistory();

  const handleInputChange = useCallback((e) => {
    const { value, name = 'userRole' } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!isValid) return;
      const getMappedData = {
        id: uuidv4(),
        avatar_url: formState.avatar,
        login: formState.nickName,
        type: formState.userRole,
        site_admin: formState.isSiteAdmin,
      };
      const users = sessionStorage.getItem('users');
      sessionStorage.setItem(
        'users',
        JSON.stringify([...JSON.parse(users), getMappedData], null, 2)
      );
      history.push('/');
    },
    [formState]
  );

  const handleCheckbox = () => {
    setFormState((prev) => ({
      ...prev,
      isSiteAdmin: !formState.isSiteAdmin,
    }));
  };

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => history.push('/')}>
        GO BACK
      </Button>
      <FormContainer>
        <Paragraph padding="40px 0 20px" fontSize="30px">
          New User
        </Paragraph>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <p>Avatar</p>
            <input type="text" name="avatar" onChange={(e) => handleInputChange(e)} />
          </label>
          {!isValid && <ErrorMessage />}
          <label>
            <p>Nickname</p>
            <input type="text" name="nickName" onChange={(e) => handleInputChange(e)} />
          </label>
          <DropDown>
            <p>User Role</p>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formState.userRole}
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={'user'}>User</MenuItem>
                <MenuItem value={'manager'}>Manager</MenuItem>
                <MenuItem value={'viewer'}>Viewer</MenuItem>
              </Select>
            </FormControl>
          </DropDown>
          <p>isSiteAdmin</p>
          <Checkbox checked={formState.isSiteAdmin} onChange={() => handleCheckbox()} />
          <Submit type="submit" value="Submit" isValid={isValid} />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default NewUser;
