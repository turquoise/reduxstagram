import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addComment, removeComment, increment } from '../actions';
import './PhotoGrid.css';
//import Photo from './photo';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  titleStyle: {
    height: 500
  }

};

class PhotoGrid extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div style={styles.root}>
        <GridList cellHeight={400} cols={3}  padding={5}>
          {
            this.props.posts.map( (post, i) => (
                <GridTile key={i} >
                  <Card>
                    <CardMedia overlay={<CardTitle title={post.caption} /> }>
                      <img src={post.display_src}/>
                    </CardMedia>
                  </Card>
                </GridTile>
              ))
          }
        </GridList>
      </div>
      </MuiThemeProvider>
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
