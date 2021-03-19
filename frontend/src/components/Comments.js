import React from "react";
import '../App.css';
import {Avatar, Grid} from "@material-ui/core";
import SubmitButton from "./SubmitButton";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentData: this.props.commentsData,
        }
    }


    // fetchComments() {
    //     fetch('/api/comment/', {
    //         method: 'GET',
    //         headers: {'content-type': 'application/json'}
    //     })
    //         .then(response => response.json())
    //         .then(data =>
    //             this.setState({commentData: data,})
    //         )
    // }

    //    componentDidMount() {
    //     this.fetchcommentData()
    // }
    //



//     render() {
//         return (
//             <div className='comments-overlay'>
//                 <p>Hello.</p>
//             </div>
//         )
//     }
// }

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

            <div className="comment-section">

                <div className="comment-header">
                    <Avatar
                        className="comment-avatar"
                        alt={username}
                        src=""
                    />
                    <h5>{username}</h5>
                </div>

                <div className="comment-replies" key={id}>
                    <Avatar
                        className="comment-avatar"
                        alt={username}
                        src=""
                    />
                    <h5>{username} : {comment}</h5>
                </div>

                <div className="comment-text">

                    <form
                        //onSubmit={this.onSubmit}
                        className="comment-form">
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

export default Comments;