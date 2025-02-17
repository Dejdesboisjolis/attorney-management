import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { AttorneyForm } from './components/AttorneyForm';
import { AttorneyList } from './components/AttorneyList';

const AttorneysPages = ({ attorneyStore }) => {
  useEffect(() => {
    attorneyStore.fetchAttorneys();
  }, [attorneyStore]);

  const handleCreate = (data) => {
    attorneyStore.addAttorney(data);
  };

  const handleEdit = (attorney) => {
    // open a modal or a form to edit the attorney
  };

  const handleDelete = (id) => {
    attorneyStore.removeAttorney(id);
  };

  return (
    <div>
      <h1>Attorney Management</h1>
      <AttorneyForm onSubmit={handleCreate} />
      <AttorneyList attorneys={attorneyStore.attorneys} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default observer(AttorneysPages);
