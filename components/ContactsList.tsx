import * as React from 'react';
import {Component} from 'react';
import {v4 as generateUUID} from 'node-uuid';

// TODO: fix my TSD issue so it can be imported via import
const classnames = require('classnames');

import Contact from '../interfaces/Contact';
import UUID from '../interfaces/UUID';

interface ContactsListProps {
  contacts: Array<Contact>;
  selectedContactId: string | UUID;
  selectContact: (contactId: string)=>{};
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

  handleClick(id: string) {
    this.props.selectContact(id);
  }

  isSelected(contact: Contact): boolean {
    return contact.id === this.props.selectedContactId;
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
            return <li
                      className={classnames({selected: this.isSelected(contact)})}
                      key={contact.id.toString()}
                      onClick={this.handleClick.bind(this, contact.id.toString())} >
                    {contact.firstName}&nbsp;<em>{contact.lastName}</em>
                   </li>
          })}
        </ul>
      </div>
    );
  }
}