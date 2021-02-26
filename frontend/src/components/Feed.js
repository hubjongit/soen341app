import React, { Component, } from 'react';
import {Avatar, Grid} from "@material-ui/core";
import '../App.css';


class Feed extends Component {

    constructor(props) {
        super(props);
        // this.state = ({username: '', picture: '', caption: ''})
        this.state = {
            postData: [],
            activeItem: {

            //Check what completed,editing fields do
                id: null,
                username: '',
                picture:'',
                caption:'',
                completed: false,
            },
            editing: false,
        }
        this.fetchPosts = this.fetchPosts.bind(this)
    };

    // this.getFeed();
    // console.log(postData);
    // }


    fetchPosts() {
        fetch('/api/feed/', {
            method: 'GET',
            headers: {'content-type': 'application/json'}})

            .then(response => response.json())
            .then(data =>
                this.setState({
                        postData: data
                    }
                ))}




    componentDidMount() {
        this.fetchPosts()
    }


    render() {

        const posts = this.state.postData

        return (
            posts.map(function (posts, index) {
                return (

                    <div key={index}>
                        <Grid
                            id="feed-grid"
                            container
                            direction="column"
                            justify="space-between"
                            alignItems="center"
                        >
                            <div className="container-post">
                                <div className="post-card">
                                    <div className="post-header">
                                        <Avatar
                                            className="post-avatar"
                                            alt={posts.username}
                                            src=""
                                        />
                                        <h4>{posts.username}</h4>
                                    </div>
                                    <img className="post-image"
                                         src={posts.picture} alt="picture" />
                                    <h5 className="post-text"> <strong>{posts.username}:</strong> {posts.caption}</h5>
                                </div>
                            </div>


                            {/*TEST*/}
                            {/*<span>*/}
                            {/*{posts.username}*/}
                            {/*<img src={posts.picture}/>*/}
                            {/*{posts.picture}*/}
                            {/*{posts.caption}*/}
                            {/*    </span>*/}
                        </Grid>

                    </div>

                )


            })
        )
    }
}

function Post({username, caption, picture}) {

    return(
        <div className="container-post">
             <div className="post-card">
                 <div className="post-header">
                     <Avatar
                        className="post-avatar"
                         alt={username}
                         src=""
                    />
                     <h4>{username}</h4>
                 </div>
                 <img className="post-image"
                      src={picture} alt="picture" />
                 <h5 className="post-text"> <strong>{username}:</strong> {caption}</h5>
             </div>
         </div>
     )
}







// This sets the data and nothing else

    // componentDidMount() {
    //     fetch('/api/feed/', {
    //         method: 'GET',
    //         headers: {'content-type': 'application/json'}
    //             .then(results=> {
    //                 return results.json();
    //             }).then(data =>{
    //                 let postData = data.results.map((username) =>{
    //                     return(
    //                         <div key = {username.results}></div>
    //                     )
    //                 })
    //                 this.setState({postData: postData});
    //                 console.log("state", this.state.postData);
    //             })
    //     })
    //
    //
    // }



//This getFeed works for console.log and nothing else


    // getFeed() {
    //     fetch('/api/feed/', {
    //         method: 'GET',
    //         headers: {'content-type': 'application/json'}
    //     })
    //
    //         .then(response => response.json())
    //         .then(data => {
    //             this.postData = data;
    //             console.log(data)
    //         })
    //         .catch(error => console.log(error))
    // }
    // .then(response => response.json())
    // .then(data => this.setState({postData:data,
    //     postData = data;
    //     this.setState({});
    // })
    // .catch(error => console.log(error)))
    // }


//<---------------------OG------------------->

    // render() {
    //     return (
    //         <Grid
    //             id="feed-grid"
    //             container
    //             direction="column"
    //             justify="space-between"
    //             alignItems="center"
    //         >
    //
    //             {this.getFeed().map(post => (
    //                 <Post username={post.username} timestamp={post.timestamp} caption={post.caption}
    //                       picture={post.picture}/>
    //             ))}
    //         </Grid>
    //     )
    // }
// }
//

export default Feed