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

class ContactListDivider extends Component<{charchtar: string; key: string}, {}> {
  render() {
    return (<li key={this.props.key} className="divider">{this.props.charchtar}</li>);
  }
}

class ContactListItem extends Component<{contact: Contact; isSelected: boolean; key: string; onClick: ()=>{}}, {}> {
  render() {
    const contact = this.props.contact;
    return (<li
              key={this.props.key}
              className={classnames({selected: this.props.isSelected})}
              onClick={this.props.onClick} >
                {contact.firstName}&nbsp;<em>{contact.lastName}</em>
          </li>);
  }
}

type DividerOrContact = Divider | Contact;

export default class ContactsList extends Component<ContactsListProps, ContactsListState> {

  get contactsAndDividers(): Array<DividerOrContact> {
    const contacts = this.props.contacts;
    const result: Array<DividerOrContact> = [];

    if (!contacts.length) return [];

    result.push(new Divider(contacts[0].firstName.charAt(0)));

    for (let i = 0; i < contacts.length; i++) {
      const element = contacts[i];
      const nextElement = contacts[i+1];

      result.push(element);

      if (nextElement && (nextElement.firstName.charAt(0) !== element.firstName.charAt(0))) {
        result.push(new Divider(nextElement.firstName.charAt(0)));
      }
    }

    return result;
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
             return <ContactListDivider key={item.id.toString()} charchtar={item.charchtar} />
            }
            const contact = item as Contact;
            return <ContactListItem
                      key={contact.id.toString()}
                      contact={contact}
                      isSelected={this.isSelected(contact)}
                      onClick={this.handleClick.bind(this, contact.id.toString())} />

          })}
        </ul>
      </div>
    );
  }
}