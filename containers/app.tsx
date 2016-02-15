import * as React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

interface AppProps {};
interface AppState {};

class App extends Component<AppProps, AppState> {
  static PropTypes: AppProps = {};
  render() {
    return (
      <div className="container">
        <header className="main-header"></header>
        <main></main>
        <footer className="main-footer"></footer>
      </div>
    );
  }
}


function mapStateToProps(state: AppState): AppState {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
