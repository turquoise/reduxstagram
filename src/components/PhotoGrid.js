import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PhotoGrid.css';

class PhotoGrid extends Component {



  render() {
    return (
      <div className="App">
        <h1>PhotoGrid</h1>

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



export default connect(mapStateToProps, null)(PhotoGrid);
