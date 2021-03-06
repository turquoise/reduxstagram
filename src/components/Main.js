import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addComment, removeComment, increment } from '../actions';
import PhotoGrid from './PhotoGrid';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <h1>Reduxstagram</h1>
        <PhotoGrid />
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

export default connect(mapStateToProps, { addComment, removeComment, increment })(Main)
