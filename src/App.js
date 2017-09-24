import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
//import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <div>
                <Route exact path="/" component={PhotoGrid} />
                <Route path="/:postId" component={Single} />
              </div>
            </div>

          </Router>
      </div>
    );
  }
}

export default App;
