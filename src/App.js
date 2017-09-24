import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
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
              <Switch>
                <Route exact path="/photogrid" component={PhotoGrid} />
                <Route path="/photogrid/:postId" component={Single} />
              </Switch>
            </div>

          </Router>
      </div>
    );
  }
}

export default App;
