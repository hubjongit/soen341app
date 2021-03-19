import React from 'react';
import {Avatar} from "@material-ui/core";
import '../App.css';

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

export default Comment