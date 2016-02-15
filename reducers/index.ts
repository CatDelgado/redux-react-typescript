import AppState from '../state/AppState';

export const initialState: AppState = {
  search: '',
  selectedContact: null,
  contacts: [],
  currentContact: null,
  isEditing: false
};

export default function mainReducer(state: AppState = initialState): AppState {
  return state;
}