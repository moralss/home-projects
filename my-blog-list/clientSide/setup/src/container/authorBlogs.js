import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { Link } from "react-router-dom";
import { AuthorBlogsContainer, HeaderLarge, ViewContainer, ViewTotalContainer, LinksContainer } from "../styles/styles";


// 

class AuthorBlogs extends Component {
    constructor() {
        super()
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
        this.getAuthorBlogs()
        this.props.dislikeBlog({ blogId });
    }


    increaseLike = async (blogId) => {
        await this.props.addLike({ blogId });
        this.getAuthorBlogs();
    }



    render() {
        return (
            <div>
                <AuthorBlogsContainer className="AuthorBlogs">

                    <HeaderLarge> author {this.displayAuthor()}
                    </HeaderLarge>
                    {this.props.authorBlogs.map(blog => {
                        return (
                            <ViewContainer style={{
                                padding: "2rem",
                                 marginLeft: "2rem",
                                 marginRight: "2rem"

                            }}>
                                <p>  text : {blog.text} </p>
                                <span> updated time : {blog.updated_at} </span>
                                <ViewTotalContainer>
                                    <p> likes : {blog.totalLikes}  </p>
                                    <p> total comments : {blog.totalComments}  </p>
                                </ViewTotalContainer>
                                <LinksContainer>
                                    <button onClick={() => this.increaseLike(blog.id)}>  like </button>

                                    <a href="#">
                                        <Link to={`/comments/${blog.id}`}>
                                            add Commit </Link>
                                    </a>

                                    <a href="#">
                                        <Link to={`/viewcomments/${blog.id}`}>
                                            view Commits </Link>
                                    </a>
                                </LinksContainer>
                            </ViewContainer>
                        );
                    })}
                </AuthorBlogsContainer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authorBlogs: state.profile.authorsBlogs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlogsForAuthor: (authorId) => dispatch(thunks.getBlogsForAuthor(authorId)),
        dislikeBlog: (blogId) => dispatch(thunks.dislikeBlog(blogId)),
        addLike: (blogId) => dispatch(thunks.addLike(blogId)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthorBlogs);
