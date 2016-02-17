import AppState from '../interfaces/AppState';
import ActionTypes from '../constants/ActionTypes';
import Action from '../interfaces/Action';

import {CONTACTS} from './contacts';

export const initialState: AppState = {
  search: '',
  selectedContactId: '9bf34709-6151-439c-a741-9fc455430b11',
  contacts: CONTACTS,
  isEditing: false
};

export default function mainReducer(state: AppState = initialState, action: Action): AppState {

  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH:
      return state;

    case ActionTypes.SELECT_CONTACT:

      // TODO: use object assing
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