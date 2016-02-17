import UUID from '../interfaces/UUID';
import Action from '../interfaces/Action';
import ActionTypes from '../constants/ActionTypes';

export function selectContact(contactId: UUID): Action {
  return  {
    type: ActionTypes.SELECT_CONTACT,
    payload: contactId
  };
}

export function changeSearch(query: string): Action {
  return {
    type: ActionTypes.CHANGE_SEARCH,
    payload: query
  }
}