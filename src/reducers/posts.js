import posts_json from '../data/posts';
import { REMOVE, INCREMENT_LIKES } from '../actions';

function posts(state = posts_json, action) {
  switch (action.type) {
    default:
      console.log('posts state ', state);
      return state;
  }

}

export default posts;
