import React, { Component } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <div>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/photogrid">Reduxstagram</Link></div>
              </div>
              <div>
                <Route exact path="/" component={Main} />
                <Route exact path="/photogrid" component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
              </div>
            </div>  
          </Router>
      </div>
    );
  }
}

export default App;
