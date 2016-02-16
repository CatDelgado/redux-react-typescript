import * as React from 'react';
import {Component} from 'react';

import Contact from '../interfaces/Contact';

interface ContactsListProps {
  contacts: Array<Contact>
}
interface ContactsListState {}

class Divider {
  public isDivider: boolean = true;
  constructor (public charchtar: string) {}
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
             return <li className="divider">{item.charchtar}</li>
            }

            // TODO: fix me. URL: http://stackoverflow.com/questions/35422600/how-to-use-an-instance-with-type-of-union-of-interfaces-in-typescript
            // const {firstName, lastName} = item;
            const {firstName, lastName} = {firstName: 'Peter', lastName: 'Griffin'}

            return <li>{firstName}&nbsp;<em>{lastName}</em></li>
          })}
        </ul>
      </div>
    );
  }
}