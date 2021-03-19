import React, {Component,} from 'react';
import {Avatar, Grid} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from '@fortawesome/free-solid-svg-icons'
import '../App.css';


class Feed extends Component {

    constructor(props) {
        super(props);
        // this.state = ({username: '', image: '', caption: ''})
        this.state = {
            postData: [],
            activeItem: {

                //Check what completed,editing fields do
                id: null,
                username: '',
                image: '',
                caption: '',
                completed: false,
            },
            editing: false,
        }
        this.fetchPosts = this.fetchPosts.bind(this);
    };

    fetchPosts() {
        fetch('/api/feed/', {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(data =>
                this.setState({postData: data,})
            )
    }

    componentDidMount() {
        this.fetchPosts()
    }

    render() {
        const posts = this.state.postData
        return (
            <Grid
                id="feed-grid"
                container
                direction="column"
                justify="space-between"
                alignItems="center">

                {posts.map(function (post, index) {
                    return (
                        <Post username={post.username} caption={post.caption}
                              image={post.image} key={index}/>
                    )
                })
                }
            </Grid>
        )
    }
}

function Post({username, caption, image, index}) {

    function handleToggleComments() {
        
    }

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
            <img className="post-image" src={image} alt="" />
            <div className='post-bottom-section'>
                <p className='post-text mr-auto'><strong>{username}:</strong> {caption}</p>
                <FontAwesomeIcon icon={faComments} className='ml-auto' onClick={() => handleToggleComments()} />
            </div>
        </div>
    )
}

export default Feed;


