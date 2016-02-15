import AppState from '../interfaces/AppState';

import {CONTACTS} from './contacts';

export const initialState: AppState = {
  search: '',
  selectedContactId: null,
  contacts: CONTACTS,
  currentContact: CONTACTS[0],
  isEditing: false
};

export default function mainReducer(state: AppState = initialState): AppState {
  return state;
}