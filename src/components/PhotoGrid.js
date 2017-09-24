import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    justifyContent: 'space-around'
  }


};

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
    //console.log('comments ', this.props.comments);
  }
  render() {
    return (
      <MuiThemeProvider>
      <div style={styles.root}>
        <GridList cellHeight={400} cols={4}  padding={10}>
          {
            this.props.posts.map( (post, i) => (
                <GridTile key={i} >
                  <Card style={styles.root}>
                    <Link to={`view/${post.code}`}>
                      <CardMedia overlay={<CardTitle subtitle={post.caption}/> }>
                        <img src={post.display_src} className="photo"/>
                      </CardMedia>
                      <CardText>
                        <button className="btn btn-secondary likes" onClick={this.props.increment.bind(null, i)}>
                          <i className="fa fa-heart" aria-hidden="true"></i> {post.likes}
                        </button>
                        {<span className="btn btn-seconary comment-count">
                          <span className="speech-bubble">
                            {
                              this.props.comments[post.code] ? <i className="fa fa-comment" aria-hidden="true"></i> : ''
                            }

                          </span>
                          {this.props.comments[post.code] ? this.props.comments[post.code].length : ''}
                        </span> }
                      </CardText>

                    </Link>
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
