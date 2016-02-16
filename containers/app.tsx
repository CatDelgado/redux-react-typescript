import * as React from 'react';
import {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AppState from '../interfaces/AppState';
import Contact from '../interfaces/Contact';
import * as Actions from '../actions/index';

import SearchBox from '../components/SearchBox';
import ContactsList from '../components/ContactsList';
import ContactDetails from '../components/ContactDetails';

interface AppProps extends AppState {
  actions?;
};

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div className="container">
        <header className="main-header"></header>
        <main>
          <aside className="side-bar">
            <SearchBox value={this.props.search} />
            <ContactsList />
          </aside>
          <ContactDetails contact={this.selectedContact}/>
        </main>
        <footer className="main-footer"></footer>
      </div>
    );
  }

  get selectedContact(): Contact {
    return this.props.contacts.filter(contact => contact.id === this.props.selectedContactId)[0];
  }
}

function mapStateToProps(state: AppState): AppProps {
  return state;
}

function mapDispatchToProps(dispatch): AppProps {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
