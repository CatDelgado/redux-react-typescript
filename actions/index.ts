import UUID from '../interfaces/UUID';
import ActionTypes from '../constants/ActionTypes';

interface Action {
  type: ActionTypes;
  payload: {}
}

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