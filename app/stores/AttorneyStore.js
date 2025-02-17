import { types, flow } from 'mobx-state-tree';
import Attorney from '../models/AttorneyModel';

console.log(Attorney); // 🔍 Vérifier si "Attorney" est bien importé

export const AttorneyStore = types
  .model('AttorneyStore', {
    attorneys: types.array(Attorney),
  })
  .actions((self) => ({
    addAttorney(attorney) {
      self.attorneys.push(attorney);
    },
    removeAttorney(id) {
      self.attorneys = self.attorneys.filter((attorney) => attorney.id !== id);
    },
    updateAttorney(updatedAttorney) {
      const attorney = self.attorneys.find((a) => a.id === updatedAttorney.id);
      if (attorney) {
        attorney.setName(updatedAttorney.name);
        attorney.setEmail(updatedAttorney.email);
        attorney.setPhone(updatedAttorney.phone);
        attorney.setPracticeArea(updatedAttorney.practiceArea);
      }
    },
    fetchAttorneys: flow(function* () {
      try {
        const res = yield fetch('/api/attorneys');
        const data = yield res.json();
        self.attorneys = data;
      } catch (e) {
        console.error('Failed to load attorneys', e);
      }
    }),
  }));
