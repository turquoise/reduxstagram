import _ from 'lodash';
import comments_json from '../data/comments';
import { REMOVE_COMMENT, ADD_COMMENT } from '../actions';

function postComments(state, action) {
  switch (action.type) {
    case ADD_COMMENT:
      // return the new state with the comment.
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case REMOVE_COMMENT:
      console.log('removing a comment');
      // return the state without the comment.
      return [
        // from the start to the one we want to delete.
        ...state.slice(0, action.i ),
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = comments_json, action) {
  if (action.postId !== 'undefined') {
    return {
      // take the current state.
      ...state,
      // overwrite this post with a new one.
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
  // switch (action.type) {
  //   case ADD_COMMENT:
  //     const postId = action.postId;
  //     return [
  //       ...state.push(action.postId, action.author, action.comment)
  //     ]
  //   case REMOVE_COMMENT:
  //     const comments = _.omitBy( state, function(value, key) {
  //       console.log('value ', value, 'key ', key);
  //       //return !key.startsWith(action.postId);
  //     });
  //     console.log('comments ', comments);
  //
  //     //return comments;
  //   default:
  //     console.log('comments state ', state);
  //     return state;
  //}

}

export default comments;
