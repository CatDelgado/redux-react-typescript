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
  actions?: {
    changeSearch: ()=> {};
    selectContact: ()=> {};
  }
}

class App extends Component<AppProps, AppState> {

  render() {
    return (
      <div className="container">
        <header className="main-header"></header>
        <main>
          <aside className="side-bar">
            <SearchBox query={this.props.search} changeSearch={this.props.actions.changeSearch} />
            <ContactsList
              selectedContactId={this.props.selectedContactId}
              selectContact={this.props.actions.selectContact}
              contacts={this.props.contacts} />
          </aside>
          <ContactDetails contact={this.selectedContact} />
        </main>
        <footer className="main-footer"></footer>
      </div>
    );
  }

  // Move me to a reducer
  get selectedContact(): Contact {
    return this.props.contacts.filter(contact => contact.id === this.props.selectedContactId)[0];
  }
}

function mapStateToProps(state: AppState): AppProps {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
