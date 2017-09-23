import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, removeComment, increment } from '../actions';
import './PhotoGrid.css';
import Photo from './photo';
import { Grid, Row, Col } from 'react-flexbox-grid';
// https://www.codementor.io/christiannwamba/build-a-react-image-gallery-with-cloudinary-xh1cekno3
// http://joelhooks.com/blog/2016/03/20/build-an-image-gallery-using-redux-saga
class PhotoGrid extends Component {


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-cemter">
            {/*
              this.props.posts.map( (post, i) => <Photo {...this.props} key={i} i={i} post={post}/> )
            */}
            {
              this.props.posts.map( (post, i) => {
                return (
                  <div className="responsive" key={post.id}>
                    <img src={post.display_src} alt={post.caption} />
                    <div>{post.caption}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
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
