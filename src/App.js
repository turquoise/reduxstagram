import React, { Component } from 'react';
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
                <Link to="/"><h1>Reduxstagram</h1></Link>
                <div><Link to="/photogrid">Photogrid</Link></div>
              </div>
              <div>
                <Route exact path="/" component={Main} />
                <Route path="/photogrid" component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
              </div>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
