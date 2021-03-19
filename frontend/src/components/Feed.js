import React from 'react';
import Modal from 'react-modal';
import {Avatar, Grid} from "@material-ui/core";
import Comments from './Comments';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from '@fortawesome/free-solid-svg-icons'
import '../App.css';


class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postData: [],
            showCommentsModal: false,
            commentsModalState: {
                postId: '',
                postUsername: '',
                postImage: '',
                commentData: [],
            }
        }
        this.enableShowCommentsModal = this.enableShowCommentsModal.bind(this);
        this.disableShowCommentsModal = this.disableShowCommentsModal.bind(this);
        this.fetchPosts = this.fetchPosts.bind(this);
    };

    enableShowCommentsModal = (postId, postUsername, postImage, commentData) => {
        const newCommentsModalState = {
            ...this.state.commentsModalState, postId: postId, postUsername: postUsername,
            postImage: postImage, commentData: commentData
        };
        this.setState({commentsModalState: newCommentsModalState});
        this.setState({showCommentsModal: true});
    }

    disableShowCommentsModal = () => {
        this.setState({showCommentsModal: false});
    }


    fetchPosts() {
        fetch('/api/feed/', {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(data =>
                this.setState({postData: data})
            )
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        const posts = this.state.postData
        return (
            <div>
                <Grid
                    id="feed-grid"
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center">

                    {posts.map((post, index) => {
                        return (
                            <Post id={post.id} username={post.username} caption={post.caption}
                                  image={post.image} comments={post.comments}
                                  handleEnableShowComments={this.enableShowCommentsModal}
                                  key={index}/>
                        )
                    })}
                </Grid>
                <Modal
                    isOpen={this.state.showCommentsModal}
                    contentLabel="Post Comments Section"
                    shouldCloseOnOverlayClick={true}
                    shoudCloseOnEsc={true}
                    className='modal-container'
                    onRequestClose={this.disableShowCommentsModal}
                >
                    <Comments id={this.state.commentsModalState.postId}
                              username={this.state.commentsModalState.postUsername}
                              image={this.state.commentsModalState.postImage}
                              comments={this.state.commentsModalState.commentData}
                              handleDisableShowComments={this.disableShowCommentsModal}
                              forceRerender={this.forceUpdate}
                    />
                </Modal>
            </div>
        )
    }
}

function Post({id, username, caption, image, comments, handleEnableShowComments, index}) {

    return (
        <div className="post-card" key={index}>
            <div className="post-header">
                <Avatar
                    className="post-avatar"
                    alt={username}
                    src=""
                />
                <p className="post-username">{username}</p>
            </div>
            <img className="post-image" src={image} alt=""/>
            <div className='post-bottom-section'>
                <p className='post-text mr-auto'><strong>{username}:</strong> {caption}</p>
                <FontAwesomeIcon icon={faComments} className='ml-auto'
                                 onClick={() => handleEnableShowComments(id, username, image, comments)}/>
            </div>
        </div>
    )
}

export default Feed;


