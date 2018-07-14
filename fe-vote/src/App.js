// Dependancies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import Index from './pages/index/Index';
import Login from './pages/login/Login';

// CSS (global)
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' render={(props) => (
            <Index />
          )} />
        </Router>
        <Router>
          <Route exact path='/login' render={(props) => (
            <Login />
          )} />
        </Router>
      </div>
    );
  }
}

export default App;
