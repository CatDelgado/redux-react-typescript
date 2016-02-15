import * as React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AppState from '../state/AppState';
import * as Actions from '../actions/index';

import SearchBox from '../components/SearchBox';
import ContactsList from '../components/ContactsList';
import ContactDetails from '../components/ContactDetails';

interface AppProps {
  actions?;
};

class App extends Component<AppProps, AppState> {
  props: AppProps;
  static PropTypes: AppProps = {};

  render() {
    const {actions} = this.props;
    return (
      <div className="container">
        <header className="main-header"></header>
        <main>
          <aside className="side-bar">
            <SearchBox />
            <ContactsList />
          </aside>
          <ContactDetails />
        </main>
        <footer className="main-footer"></footer>
      </div>
    );
  }
}


function mapStateToProps(state: AppState): AppState {
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
