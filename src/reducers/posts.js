import posts_json from '../data/posts';


function posts(state = posts_json, action) {
  switch (action.type) {
    default:
      console.log('posts state ', state);
      return state;
  }

}

export default posts;
