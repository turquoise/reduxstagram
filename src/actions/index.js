
export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE = 'REMOVE';

// increment likes
export function increment(index) {
  const action = {
    type: 'INCREMENT_LIKES',
    index: index
  }
  return action;
}

// add comments
export function addComment(postId, author, comment) {
  const action =  {
    type: 'ADD_COMMENT',
    postId: postId,
    author: author,
    comment: comment
  }
  return action;
}

// remove comments
export function removeComment(postId, commentId) {
  const action = {
    type: 'REMOVE',
    commentId: commentId,
    postId: postId
  }
  return action;
}
