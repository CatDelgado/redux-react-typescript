import * as React from 'react';
import {Component} from 'react';
import {v4 as generateUUID} from 'node-uuid';

import Contact from '../interfaces/Contact';
import UUID from '../interfaces/UUID';

interface ContactsListProps {
  contacts: Array<Contact>
}
interface ContactsListState {}

class Divider {
  public isDivider: boolean = true;
  public id: UUID;
  constructor (public charchtar: string) {
    this.id = generateUUID();
  }
}

export default class ContactsList extends Component<ContactsListProps, ContactsListState> {

  get contactsAndDividers(): Array<Divider | Contact> {
    // Big TODO
    const divider = new Divider('P');
    return [divider, ...this.props.contacts]
  }

  render() {
    return (
      <div className="list">
        <ul>
          {this.contactsAndDividers.map(item => {
            if (item instanceof Divider) {
             return <li className="divider" key={item.id.toString()}>{item.charchtar}</li>
            }
            const contact = item as Contact;
            return <li className="selected" key={contact.id.toString()}>
                    {contact.firstName}&nbsp;<em>{contact.lastName}</em>
                   </li>
          })}
        </ul>
      </div>
    );
  }
}