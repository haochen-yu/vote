// Dependancies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Components
import Index from './index/Index';
import Navbar from './navbar/Navbar';

// CSS (global)
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Route exact path='/' render={(props) => (
            <Index />
          )} />
        </Router>
      </div>
    );
  }
}

export default App;
