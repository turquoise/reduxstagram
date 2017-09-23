import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main</h1>
        <Link to="/photogrid">Reduxstagram</Link>
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

export default connect(mapStateToProps, null)(Main)
