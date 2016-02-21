import UUID from '../interfaces/UUID';
import initialState from './initialState';
import Action from '../interfaces/Action';
import Contact from '../interfaces/Contact';
import ActionTypes from '../constants/ActionTypes';
import contacts from './contacts';

export default function selectedContactId(state: UUID = initialState.selectedContactId, action: Action): UUID {
  switch(action.type) {
    case ActionTypes.SELECT_CONTACT:
      return '' + action.payload;
    case ActionTypes.CHANGE_SEARCH:
      const filtered = contacts(undefined, action);
      if (filtered.length) {
        return filtered[0].id;
      }
      return null;
    default:
      return state;
  }
}
