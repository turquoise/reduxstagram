import comments_json from '../data/comments';
import { REMOVE_COMMENT, ADD_COMMENT } from '../actions';


function comments(state = comments_json, action) {
  switch (action.type) {
    case ADD_COMMENT:
    const postId = action.postId;
      return [
        ...state.slice(),
        {
          user: action.author,
          text: action.comment
        }
      ];
    case REMOVE_COMMENT:
      return state;
    default:
      console.log('comments state ', state);
      return state;
  }

}

export default comments;
