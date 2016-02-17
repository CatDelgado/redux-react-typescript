import AppState from '../interfaces/AppState';
import ActionTypes from '../constants/ActionTypes';
import Action from '../interfaces/Action';
import Contact from '../interfaces/Contact';

import {CONTACTS} from './contacts';

export const initialState: AppState = {
  search: '',
  selectedContactId: CONTACTS[0].id,
  contacts: CONTACTS,
  isEditing: false
};

export default function mainReducer(state: AppState = initialState, action: Action): AppState {

  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH:
      const filteredContacts = CONTACTS.filter(contact=>
         match(contact, action.payload.toString())
      );

      let selectedContactId = null;

      if (filteredContacts.length) {
        selectedContactId = filteredContacts[0].id;
      }

      return {
        search: action.payload.toString(),
        selectedContactId,
        contacts: filteredContacts,
        isEditing: state.isEditing
      };

    case ActionTypes.SELECT_CONTACT:

      // TODO: use Object.assign
      return {
        search: state.search,
        selectedContactId: action.payload,
        contacts: state.contacts,
        isEditing: state.isEditing
      };

    default:
      return state;
  }
}

// TODO: make it smarter
function match(contact:Contact, query: string): boolean {
  return (contact.firstName && contact.firstName.indexOf(query) > -1) ||
    (contact.lastName && contact.lastName.indexOf(query) > -1);
}