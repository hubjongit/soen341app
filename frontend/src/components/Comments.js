import React from "react";
import '../App.css';
import {Avatar} from "@material-ui/core";
import SubmitButton from "./SubmitButton";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentData: this.props.comments,
        }
    }

    render() {
        const comments = this.state;
        return (
                {comments.map(function (comment, index) {
                    return (
                        <Comment username={comment.username} comment={comment.comment}
                                 image={comment.image} id={index}/>
                    )
                })}
        )
    }
}

function Comment({id, username, comment,image}){
    return (

        <div className="comment-card">
            {/*<div className="comment-close"><Close fontSize="large"/></div>*/}
            <img className="comment-image" src={image} alt=""/>

            <div className="comments-section">

                <div className="comments-header">
                    <Avatar
                        className="comments-avatar"
                        alt={username}
                        src=""
                    />
                    <h5>{username}</h5>
                </div>

                <div className="comment-replies" key={id}>
                    <Avatar
                        className="comments-avatar"
                        alt={username}
                        src=""
                    />
                    <h5>{username} : {comment}</h5>
                </div>

                <div className="comment-text">

                    <form
                        //onSubmit={this.onSubmit}
                        className="comments-form">
                        <input
                            name='comment'
                            type='text'
                            placeholder='Type a new comment'
                            //   onChange={this.onChange}
                        />
                        <SubmitButton
                            type='submit'
                            classes='submit-button-padding'
                            text='Comment'
                        />
                    </form>

                </div>
            </div>
        </div>
    );
}

function Comment({username, comment}) {

    return (
        <div className='comment-box'>
            <Avatar
                className="post-avatar"
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
