import {assign} from 'lodash';

import AppState from '../interfaces/AppState';
import ActionTypes from '../constants/ActionTypes';
import Action from '../interfaces/Action';
import Contact from '../interfaces/Contact';
import initialState from './initialState';

export default function contacts(state: Array<Contact> = initialState.contacts, action: Action): Array<Contact> {
  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH:
      return  [...initialState.contacts.filter(contact=> match(contact, action.payload.toString()))];

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