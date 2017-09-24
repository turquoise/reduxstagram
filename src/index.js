import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
// import {
//   BrowserRouter,
//   Route
//   //browserHistory
// } from 'react-router-dom'

import { createStore } from 'redux'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
//import App from './App';
import rootReducer from './reducers/index';
//import Root from './root';
//import PhotoGrid from './components/PhotoGrid';
import App from './App';
//import PhotoGrid from './components/PhotoGrid';

//import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
//store.subscribe( () => console.log('store ', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
//registerServiceWorker();
