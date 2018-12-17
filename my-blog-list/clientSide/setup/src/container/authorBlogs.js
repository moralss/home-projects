import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";

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
        console.log("this.props.match", authorId);
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
        this.props.addLike({ blogId });
    }

    displayAuthor() {
        const authorName = this.props.authorBlogs.map(blog => {
            return blog.name
        })[0];

        return authorName;
    }


    render() {
        return (
            <div className="AuthorBlogs">
                author name {this.displayAuthor()}

                {this.props.authorBlogs.map(blog => {
                    return (
                        <div>
                            <p>  text : {blog.text} </p>
                            <span> updated time : {blog.updated_at} </span>
                            <button onClick={() => this.increaseLike(blog.id)}>  Like </button>
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
        authorBlogs: state.authorAllBlogs.authorsBlogs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlogsForAuthor: (authorId) => dispatch(thunks.getBlogsForAuthor(authorId)),
        addLike: (blogId) => dispatch(thunks.addLike(blogId)),
        
        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorBlogs);
