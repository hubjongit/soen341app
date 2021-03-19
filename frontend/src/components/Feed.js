import React, {Component,} from 'react';
import {Avatar, Grid} from "@material-ui/core";
import Comments from './Comments'
import '../App.css';


class Feed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postData: [],
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
                })}

                {/*<div className="comments-overlay">*/}
                {/*<Comments/>*/}
                {/*</div>*/}

            </Grid>
        )
    }
}

function Post({username, caption, image, index}) {

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
            <p className="post-text"><strong>{username}:</strong> {caption}</p>
            <div className="comments-overlay">
            <Comments/>
            </div>
        </div>
    )
}

export default Feed;


