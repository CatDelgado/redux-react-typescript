import UUID from './UUID';
import ActionTypes from '../constants/ActionTypes';

interface Action {
  type: ActionTypes;
  payload: string | UUID
}

export default Action;