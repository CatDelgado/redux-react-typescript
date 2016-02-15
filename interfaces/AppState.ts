import UUID from './UUID';
import Contact from './Contact';

interface AppState {
  search?: string;
  selectedContactId?: UUID;
  contacts?: Array<Contact>;
  currentContact?: Contact;
  isEditing?: boolean;
}

export default AppState;


