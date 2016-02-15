interface UUID extends String {}

interface Contact {} // TODO

interface AppState {
  search: string;
  selectedContact: UUID;
  contacts: Array<Contact>;
  currentContact: Contact;
  isEditing: boolean;
}

export default AppState;

