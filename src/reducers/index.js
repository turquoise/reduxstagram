import { combineReducers } from 'redux';
import posts from './posts';
import comments from './comments';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;
