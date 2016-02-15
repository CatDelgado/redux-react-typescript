import {UUID} from '../state/AppState';
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