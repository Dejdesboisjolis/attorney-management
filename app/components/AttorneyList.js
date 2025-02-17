import { List, ListItem, Button } from '@mui/material';
import { observer } from 'mobx-react';

const AttorneyList = ({ attorneys, onEdit, onDelete }) => {
  return (
    <List>
      {attorneys.map((attorney) => (
        <ListItem key={attorney.id}>
          <div>{attorney.name}</div>
          <Button onClick={() => onEdit(attorney)}>Edit</Button>
          <Button onClick={() => onDelete(attorney.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};

export observer(AttorneyList);
