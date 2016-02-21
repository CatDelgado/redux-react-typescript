import initialState from './initialState';
import ActionTypes from '../constants/ActionTypes';
import Action from '../interfaces/Action';

export default function isEditing(state: string = initialState.search, action: Action): string {
  switch (action.type) {
    case ActionTypes.CHANGE_SEARCH:
      return action.payload.toString();

    default:
      return state;
  }
}
