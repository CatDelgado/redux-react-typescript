import * as React from 'react';
import {Component} from 'react';

import Contact from '../interfaces/contact';

interface ContactDetailsProps {
  contact: Contact
}
interface ContactDetailsState {}

export default class ContactDetails extends Component<ContactDetailsProps, ContactDetailsState> {
  render() {
    return (
      <div className="details">
        <header>
          <div className="picture" style={{backgroundImage: 'url("")'}}>
            <div className="initials">PG</div>
          </div>
          <div className="title">
            <h1 className="nam">Peter Griffin</h1>
            <div className="subtitle">Important Stuff</div>
          </div>
        </header>
        <table>
          <tbody>
            <tr>
              <td>email</td>
              <td>some@example.com</td>
            </tr>
          </tbody>
        </table>
        <footer>
          <div className="left">
            <button>+</button>
          </div>
          <div className="right">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </footer>
      </div>
    );
  }
}