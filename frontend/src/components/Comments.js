import React from "react";
import '../App.css';
import {Avatar} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons'


class Comments extends React.Component {

    render() {
        return (
            <div className="comments-card">

                <img className="comments-image" src={this.props.image} alt=""/>

                <div className='comments-content'>
                    <div className="comments-header">
                        <Avatar
                            className="comments-avatar"
                            alt={this.props.username}
                            src=""
                        />
                        <p className=''>{this.props.username}</p>
                        <FontAwesomeIcon icon={faTimes} className='comments-close ml-auto' onClick={this.props.handleDisableShowComments}/>
                    </div>

                    {this.props.comments.map((comment) => {
                        return (
                            <Comment username={comment.username} comment={comment.content}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function Comment({username, comment}) {

    return (
        <div className='comment-box'>
            <Avatar
                className="comment-avatar"
                alt={username}
                src=""
            />
            <div className='mr-auto'>
                <p className='comment-box-username'>{username}</p>
                <p className='comment-box-text'>{comment}</p>
            </div>
        </div>
    )
}

export default Comments;
