import comments_json from '../data/comments';
import { REMOVE_COMMENT, ADD_COMMENT } from '../actions';


function comments(state = comments_json, action) {
  switch (action.type) {
    case ADD_COMMENT:
    const postId = action.postId;
      return [
        ...state.push(action.postId, action.author, action.comment)
      ]
    case REMOVE_COMMENT:
      const i = action.i;
      return [
        ...state.slice(0, i ),
        ...state.slice(i, + 1 )
      ]
    default:
      console.log('comments state ', state);
      return state;
  }

}

export default comments;
