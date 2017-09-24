import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
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
              <Switch>
                <Route path="/:postId" component={Single} />
                <Route exact path="/" component={Main} />
              </Switch>
            </div>

          </Router>
      </div>
    );
  }
}

export default App;
