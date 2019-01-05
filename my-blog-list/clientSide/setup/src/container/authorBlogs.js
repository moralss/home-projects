import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";
import { Link } from "react-router-dom";



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
    }



    getAuthorBlogs = async () => {
        const authorId = this.props.match.params.id;
        await this.props.getBlogsForAuthor(authorId);
    }


    displayAuthor() {
        const authorName = this.props.authorBlogs.map(blog => {
            return blog.name
        })[0];
        return authorName;
    }

    decreaseLike = async (blogId) => {
        this.props.dislikeBlog({ blogId });
        const authorId = this.props.match.params.id;
        await this.props.getBlogsForAuthor(authorId);
    }


    increaseLike = async (blogId) => {
        await this.props.addLike({ blogId });
        const authorId = this.props.match.params.id;
        await this.props.getBlogsForAuthor(authorId);
    }



    render() {
        return (
            <div className="AuthorBlogs">
                author name {this.displayAuthor()}
                <Profile />
                {this.props.authorBlogs.map(blog => {
                    return (
                        <div>
                            <p>  text : {blog.text} </p>
                            <span> updated time : {blog.updated_at} </span>
                            <h3> likes : {blog.total}  </h3>
                            <button onClick={() => this.increaseLike(blog.id)}>  like </button>
                            {() => this.getTotalLikes(blog.id)}
                            <Link to={`/comments/${blog.id}`}>
                                add Commit </Link>
                            <Link to={`/viewcomments/${blog.id}`}>
                                view Commits </Link>
                            <h3> total comments : {blog.totalComments}  </h3>
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
