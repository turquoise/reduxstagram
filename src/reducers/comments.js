import comments_json from '../data/comments';
import { REMOVE_COMMENT, ADD_COMMENT, INCREMENT_LIKES } from '../actions';

function comments(state = comments_json, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state;
    case INCREMENT_LIKES:
      return state;
    case REMOVE_COMMENT:
      return state;
    default:
      console.log('comments state ', state);
      return state;
  }

}

export default comments;
