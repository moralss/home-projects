import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { ViewCommentsContainer , ViewCommentsWrapper } from "../styles/styles";


class ViewComments extends Component {
    constructor() {
        super()
    }


    componentWillMount() {
        this.getComments();
    }



    getComments = async () => {
        const blogId = this.props.match.params.blogid;
        await this.props.getAllComments(blogId);
        await this.props.getAuthorBlog(blogId);
    }



    render() {
        console.log(this.props.singlblog);


        return (
            <ViewCommentsContainer>
                <p> {this.props.singlblog.text}  </p>
                {this.props.allComments.map(comment => {
                    return (
                        <ViewCommentsWrapper style={{padding:"2.5rem"}}>
                            <li>  name : {comment.name} </li>
                            <li>  comment : {comment.comment} </li>
                            <li>  created at : {comment.created_at} </li>
                        </ViewCommentsWrapper>
                    );
                })}
            </ViewCommentsContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        allComments: state.comments.allCommentsForblog,
        singlblog: state.blog.authorSingleBlog
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (blogId) => dispatch(thunks.addComment(blogId))
        , getAllComments: (blogId) =>
            dispatch(thunks.getAllComments(blogId)),
        getAuthorBlog: (blogId) =>
            dispatch(thunks.getAuthorBlog(blogId))
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewComments);
