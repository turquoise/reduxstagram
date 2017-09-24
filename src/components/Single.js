import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addComment, removeComment, increment } from '../actions';
//import Photo from './photo';
import Comments from './Comments';
import './Single.css';

class Single extends Component {

  render() {
    //console.log('this.props.match.params.postId ', this.props.match.params.postId);
    const postId = this.props.match.params.postId;
    const i = this.props.posts.findIndex( (post) => post.code ===  postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];
    console.log('post ', post);
    console.log('postId ', postId);

    return (
        <div className="container">
          <Link to="/photogrid"><h1>Reduxstagram</h1></Link>
          <div className="row">
            <div className="col-6">
              <img className="single-photo" src={post.display_src} alt={post.caption} />
              <div>
                <button className="btn btn-secondary likes" onClick={this.props.increment.bind(null, i)}>
                  <i className="fa fa-heart" aria-hidden="true"></i> {post.likes}
                </button>
              </div>
            </div>
            <div className="col-6">
              <div>
                <h5 className="caption">{post.caption}</h5>
              </div>
              <div>
                <Comments postComments={postComments} postId={postId}/>
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

export default connect(mapStateToProps, { addComment, removeComment, increment })(Single);