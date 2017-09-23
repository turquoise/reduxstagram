import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './photo.css';
//import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends Component {
  render() {
    const {post, i, comments} = this.props;
    return (
      <ul>
        <li>
          <figure className="grid-figure">
            <div className="container">
              <Link to={`view/${post.code}`}>
                <img src={post.display_src} alt={post.caption} className="photo"/>
              </Link>
              {/*<CSSTransitionGroup transitionName="like"
                                  transitionEnterTimeout={500}
                                  transitionLeaveTimeout={500}>
                <span key={post.likes} className="likes-heart">
                  {post.likes}
                </span>
              </CSSTransitionGroup>*/}
            </div>
            <figcaption>
              <p>{post.caption}</p>
            </figcaption>
            <div className="control-buttons">
              <button className="btn btn-secondary likes" onClick={this.props.increment.bind(null, i)}>
                <i className="fa fa-heart" aria-hidden="true"></i> {post.likes}
              </button>
              <Link to={`view/${post.code}`}>
                <span className="btn btn-seconary comment-count">
                  <span className="speech-bubble">
                    {
                      comments[post.code] ? <i className="fa fa-comment" aria-hidden="true"></i> : ''
                    }

                  </span>
                  {comments[post.code] ? comments[post.code].length : ''}
                </span>
              </Link>
            </div>
          </figure>
        </li>
      </ul>

    )
  }
}

export default Photo;
