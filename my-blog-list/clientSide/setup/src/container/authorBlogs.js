import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";

class AuthorBlogs extends Component {

    componentWillMount() {
        this.getAuthorBlogs();

    }


    getAuthorBlogs = async () => {

        const authorId = this.props.match.params.id;
        console.log("this.props.match", authorId);
        await this.props.getBlogsForAuthor(authorId);
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
        getBlogsForAuthor: (authorId) => dispatch(thunks.getBlogsForAuthor(authorId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorBlogs);
