import React from 'react';
import ReactDOM from 'react-dom';
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
import rootReducer from './reducers';
//import Root from './root';
//import PhotoGrid from './components/PhotoGrid';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
//store.subscribe( () => console.log('store ', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
//registerServiceWorker();
