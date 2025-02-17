import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { observer } from 'mobx-react';

const AttorneyForm = ({ onSubmit, initialValues = {} }) => {
  const [name, setName] = useState(initialValues.name || '');
  const [email, setEmail] = useState(initialValues.email || '');
  const [phone, setPhone] = useState(initialValues.phone || '');
  const [practiceArea, setPracticeArea] = useState(initialValues.practiceArea || '');

  const handleSubmit = () => {
    onSubmit({ name, email, phone, practiceArea });
  };

  return (
    <form>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <TextField label="Practice Area" value={practiceArea} onChange={(e) => setPracticeArea(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

export observer(AttorneyForm);
