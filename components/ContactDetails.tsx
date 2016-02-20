import * as React from 'react';
import {Component} from 'react';

import Contact from '../interfaces/contact';

interface ContactDetailsProps {
  contact: Contact
}
interface ContactDetailsState {
  contact: Contact
}

class ProfilePicture extends Component<{contact: Contact}, {}> {
  get initials(): string {
    const contact = this.props.contact;
    let initials = '';

    if (contact.firstName) {
      // TODO: use unicode code point
      // initials += String.fromCodePoint(contact.firstName.charCodeAt(0));
      initials += contact.firstName.charAt(0);
    }

    if (contact.lastName) {
      initials += contact.lastName.charAt(0);
    }

    return initials;
  }

  get profilePictureUrl(): string {
    const contact = this.props.contact;

    if (contact.pictures && contact.pictures.length && contact.pictures[0].url) {
      return contact.pictures[0].url;
    }

    return null;
  }

  render() {
    let inner = null;

    if (this.profilePictureUrl) {
      inner = <img className="profile-picture" src={this.profilePictureUrl} />
    } else {
      inner = (<div className="initials">{this.initials}</div>)
    }

    return (<div className="picture">{inner}</div>);
  }
}

export default class ContactDetails extends Component<ContactDetailsProps, ContactDetailsState> {

  constructor(props: ContactDetailsProps, context) {
    super(props, context);
  }

  render() {
    const contact = this.props.contact;

    if (!contact) {
      return (<div></div>);
    }

    return (
      <div className="details">
        <header>
          <ProfilePicture contact={contact} />
          <div className="title">
            <h1 className="name">{contact.firstName}&nbsp;{contact.lastName}</h1>
            <div className="subtitle">{contact.nickName}</div>
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