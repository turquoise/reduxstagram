import comments_json from '../data/comments';
import { REMOVE, ADD_COMMENT } from '../actions';

function comments(state = comments_json, action) {
  switch (action.type) {
    default:
      console.log('comments state ', state);
      return state;
  }

}

export default comments;
