import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, removeComment, increment } from '../actions';
import './PhotoGrid.css';
//import Photo from './photo';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// material ui http://www.material-ui.com/#/components/grid-list

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class PhotoGrid extends Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList cellHeight={180} styles={styles.gridList}>
          {/*
            this.props.posts.map( (post, i) => <Photo {...this.props} key={i} i={i} post={post}/> )
          */}
          {
            this.props.posts.map( (post, i) => {
              return (
                <GridTile key={i} title={post.caption}>
                  <img src={post.display_src}/>
                </GridTile>
              )
            })
          }
        </GridList>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps, { addComment, removeComment, increment })(PhotoGrid);
