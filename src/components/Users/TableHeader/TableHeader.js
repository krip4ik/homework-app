import React from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { rows } from '../../config/index';

const TableHeader = ({ onSelectAllClick, numSelected, rowCount }) => {
  return (
    <TableHead>
      <TableRow variant="head">
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>
        {rows.map((row) => (
          <TableCell key={row.id}>
            <div>{row.label}</div>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
