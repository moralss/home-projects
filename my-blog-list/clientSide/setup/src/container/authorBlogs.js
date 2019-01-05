import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";
import ShowTotalLikes from './ShowTotalLikes';
import { userInfo } from "os";



class AuthorBlogs extends Component {
    constructor() {
        super()

        this.state = {
            status: false,
            blogId: 0
        }
    }


    componentWillMount() {
        this.getAuthorBlogs();
        this.getInteraction();
    }


    getInteraction = async () => {
        await this.props.getIfLiked();
    }


    getAuthorBlogs = async () => {
        const authorId = this.props.match.params.id;
        await this.props.getBlogsForAuthor(authorId);
    }


    showCommitBox(blogId) {
        console.log("before", blogId, this.state.status);
        this.setState({ blogId: blogId, status: true });
        console.log("after", blogId, this.state.status);
    }


    addCommit() {
        return (
            <div>
                <label> Add Commit</label>
                <textarea > </textarea>
            </div>
        )

    }


    decreaseLike = async (blogId) => {
        this.props.dislikeBlog({ blogId });
        const authorId = this.props.match.params.id;
        await this.props.getBlogsForAuthor(authorId);
    }


    displayAuthor() {
        const authorName = this.props.authorBlogs.map(blog => {
            return blog.name
        })[0];

        return authorName;
    }


    increaseLike = async (blogId) => {
        await this.props.addLike({ blogId });
        const authorId = this.props.match.params.id;
        await this.props.getBlogsForAuthor(authorId);
    }



    render() {
        const { like, likes } = this.props;


        return (
            <div className="AuthorBlogs">
                author name {this.displayAuthor()}
                <Profile />

                {this.props.authorBlogs.map(blog => {
                    return (
                        <div>
                            {() => this.getTotalLikes(blog.id)}
                            <p>  text : {blog.text} </p>
                            <span> updated time : {blog.updated_at} </span>
                            <h3> likes : {blog.total}  </h3>
                            <button onClick={() => this.increaseLike(blog.id)}>  like </button>
                            <button onClick={() => this.decreaseLike(blog.id)}>  unlike </button>

                            {/* <button onClick={() => this.showCommitBox(blog.id)}>  Commit </button> */}

                            {!blog.id == this.state.blogId && this.state.status ?
                                this.addCommit() : null}

                        </div>
                    );
                })}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authorBlogs: state.profile.authorsBlogs,
        like: state.profile.like,
        authorId: state.user.profile.id,
        likes: state.profile.likes
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlogsForAuthor: (authorId) => dispatch(thunks.getBlogsForAuthor(authorId)),
        dislikeBlog: (blogId) => dispatch(thunks.dislikeBlog(blogId)),
        addLike: (blogId) => dispatch(thunks.addLike(blogId)),
        getIfLiked: () => dispatch(thunks.getIfLiked()),
        getTotalLikes: (blogId) => dispatch(thunks.getTotalLikes(blogId)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorBlogs);
