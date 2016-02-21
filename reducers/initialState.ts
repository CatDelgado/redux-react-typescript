import CONTACTS from './contacts-data';
import AppState from '../interfaces/AppState';

const initialState: AppState = {
  search: '',
  selectedContactId: CONTACTS[0].id,
  contacts: CONTACTS,
  isEditing: false
};

export default initialState;