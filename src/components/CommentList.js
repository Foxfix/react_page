import React, { Component } from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';


class CommentList extends Component {
    render() {
        const text = this.props.isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props;
        if(!isOpen) return null;
        const commentElement = comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li> );
        if(!comments.length) return <p>No comments yet</p>;
        return  (
            <ul>
                {commentElement}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)
