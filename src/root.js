import React from 'react';
import { Provider } from 'react-redux'
import store, { history } from './store';
//import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route
  //browserHistory
} from 'react-router-dom'

import './App.css';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </div>
    </BrowserRouter>
  </Provider>

)


export default Root;
