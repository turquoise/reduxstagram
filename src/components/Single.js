import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Photo from './photo';
import Comments from './Comments';
import './Single.css';

class Single extends Component {

  render() {
    //console.log('this.props.match.params.postId ', this.props.match.params.postId);
    const postId = this.props.match.params.postId;
    const i = this.props.posts.findIndex( (post) => post.code ===  postId);
    const post = this.props.posts[i];
    console.log('post ', post);

    return (
      <div >
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img className="single-photo" src={post.display_src} alt={post.caption} />
            </div>
            <div className="col-6">
              <div><i className="fa fa-heart" aria-hidden="true"></i> {post.likes}</div>
              {post.caption}
              <Comments />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps, null)(Single);
