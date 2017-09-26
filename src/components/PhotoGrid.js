import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { addComment, removeComment, increment } from '../actions';
import './PhotoGrid.css';
//import Photo from './photo';
import { GridList, GridTile } from 'material-ui/GridList';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
      <div>
      <MuiThemeProvider>
      <div style={styles.root}>
        <div className="container">
          <div className="row">

          {
            this.props.posts.map( (post, i) => (

                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={i} >

                  <Card style={styles.root}>
                    <Link to={`/${post.code}`}>
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

              </div>

              ))
          }
        </div>
        </div>

      </div>
      </MuiThemeProvider>
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

export default connect(mapStateToProps, { addComment, removeComment, increment })(PhotoGrid);
