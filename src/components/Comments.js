import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, removeComment} from '../actions';
import './Comment.css';

class Comments extends Component {
  constructor(props) {
    super(props);
    const postId = this.props.postId;
    console.log('postId ', postId);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log('this.refs ', this.refs);
    const postId = this.props.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    //console.log(postId, author, comment);
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();

  }

  renderComment(comment, i) {
    //console.log('comment ', comment);
    //console.log('renderComment postId ', this.props.postId);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user} - </strong>
          {comment.text}
          <button className="remove-comment"
                  onClick={this.props.removeComment.bind(null, this.props.postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="comments">
        {
          this.props.postComments.map(this.renderComment)
        }
        <form ref="commentForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" ref="author" placeholder="author" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="text" ref="comment" placeholder="comment" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" hidden className="form-control"/>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

export default connect(mapStateToProps, { addComment, removeComment })(Comments);
