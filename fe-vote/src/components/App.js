// Dependancies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Index from './index/Index';

// CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' render={(props) => (
          <Index />
        )} />
      </Router>
    );
  }
}

export default App;
