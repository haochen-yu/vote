// Dependancies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Index from './pages/index/Index';
import Login from './pages/login/Login';
import CreatePoll from './pages/create-poll/CreatePoll';

// CSS (global)
import './App.css';

// Actions
import * as actions from './actions';

class App extends Component {
  render() {
    const { authenticated, actions } = this.props;

    console.log(this.props);

    if (!authenticated) {
      return (
        <div>
          <Router>
            <Route exact path='/create-poll' render={(props) => (
              <div>
                <CreatePoll authenticated={ authenticated } />
              </div>
            )} />
          </Router>
        </div>
      );
    }
    return (
      <div>
        <Router>
          <Route exact path='/' render={(props) => (
            <Index />
          )} />
        </Router>
        <Router>
          <Route exact path='/login' render={(props) => (
            <Login actions={ actions } />
          )} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
	authenticated: auth.authenticated
});

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
