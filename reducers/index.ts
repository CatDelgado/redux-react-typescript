import {assign} from 'lodash';

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
      const filteredContacts = CONTACTS.filter(contact=> match(contact, action.payload.toString()));

      let selectedContactId = null;

      if (filteredContacts.length) {
        selectedContactId = filteredContacts[0].id;
      }

      return assign({}, state, {
        search: action.payload.toString(),
        selectedContactId,
        contacts: filteredContacts
      });

    case ActionTypes.SELECT_CONTACT:

      return assign({}, state, {
        selectedContactId: action.payload,
      });

    default:
      return state;
  }
}

/**
 * @param  {Contact} contact
 * @param  {string} query
 * @returns boolean
 */
function match(contact:Contact, query: string): boolean {
  return (contact.firstName && contact.firstName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1) ||
    (contact.lastName && contact.lastName.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1);
}