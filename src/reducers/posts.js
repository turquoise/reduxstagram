import posts_json from '../data/posts';
import { REMOVE_COMMENT, ADD_COMMENT, INCREMENT_LIKES } from '../actions';

function posts(state = posts_json, action) {
  switch (action.type) {
    case INCREMENT_LIKES:
      //console.log('incrementing likes');
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating.
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // after the one we are updating.
      ]
    default:
      console.log('posts state ', state);
      return state;
  }

}

export default posts;
