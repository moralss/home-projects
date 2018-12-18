import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";
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
        const authorId = this.props.authorId;
        await this.props.getIfLiked(2);
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

    increaseLike(blogId) {
        this.getInteraction();
        this.props.addLike({ blogId });
    }

    decreaseLike(blogId) {
        console.log("decrease")
        this.props.dislikeBlog({ blogId });
    }

    displayAuthor() {
        const authorName = this.props.authorBlogs.map(blog => {
            return blog.name
        })[0];

        return authorName;
    }


    render() {
        const { like } = this.props;

        return (
            <div className="AuthorBlogs">
                author name {this.displayAuthor()}

                {this.props.authorBlogs.map(blog => {
                    return (
                        <div>
                            <Profile />
                            <p>  text : {blog.text} </p>
                            <span> updated time : {blog.updated_at} </span>

                            {like === 0 ?
                                <button onClick={() => this.increaseLike(blog.id)}>
                                    like
                            </button>
                                :
                                <button onClick={() => this.decreaseLike(blog.id)}>
                                    unlike
                            </button>
                            }

                            <button onClick={() => this.showCommitBox(blog.id)}>  Commit </button>
                            {!blog.id == this.state.blogId && this.state.status ?
                                this.addCommit() : null}

                            {/* {this.state.status ? this.addCommit() : null} */}

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
        authorId: state.user.profile.id
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlogsForAuthor: (authorId) => dispatch(thunks.getBlogsForAuthor(authorId)),
        dislikeBlog: (blogId) => dispatch(thunks.dislikeBlog(blogId)),
        addLike: (blogId) => dispatch(thunks.addLike(blogId)),
        getIfLiked: () => dispatch(thunks.getIfLiked()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorBlogs);
