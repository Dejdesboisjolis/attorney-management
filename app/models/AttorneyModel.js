import { types } from 'mobx-state-tree';

const Attorney = types
  .model('Attorney', {
    id: types.identifierNumber,
    name: types.string,
    email: types.string,
    phone: types.string,
    practiceArea: types.string,
  })
  .actions((self) => ({
    setName(name) {
      self.name = name;
    },
    setEmail(email) {
      self.email = email;
    },
    setPhone(phone) {
      self.phone = phone;
    },
    setPracticeArea(practiceArea) {
      self.practiceArea = practiceArea;
    },
  }));

export default Attorney;
