import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, removeComment, increment } from '../actions';
import './PhotoGrid.css';
import Photo from './photo';

class PhotoGrid extends Component {

  render() {
    return (
      <div className="photo-grid">
        {
          this.props.posts.map( (post, i) => <Photo {...this.props} key={i} i={i} post={post}/> )
        }

      </div>
    );
  }
}

//PhotoGrid = connect(PhotoGrid)
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps, { addComment, removeComment, increment })(PhotoGrid);
