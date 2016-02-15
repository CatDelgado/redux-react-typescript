import * as React from 'react';
import {Component} from 'react';

interface ContactsListProps {}
interface ContactsListState {}

export default class ContactsList extends Component<ContactsListProps, ContactsListState> {
  render() {
    return (
      <div className="list">
        <ul>
          <li className="divider">A</li>
          <li>Adam&nbsp;<em>Peterson</em></li>
          <li className="divider">P</li>
          <li className="selected">Peter&nbsp;<em>Griffin</em></li>
        </ul>
      </div>
    );
  }
}