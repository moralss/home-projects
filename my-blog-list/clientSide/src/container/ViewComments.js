import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import {
    ViewCommentsContainer,
    ViewCommentsWrapper, ButtonLink, SmallHeader
} from "../styles/styles";
import history from '../history/index';


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


    addComment() {
        const blogId = this.props.match.params.blogid;
        history.push(`/comments/${blogId}`)
    }

    render() {
        console.log(this.props.singlblog);

        return (
            <ViewCommentsContainer>
                <p style={{ fontSize: "1.6rem ", width: "100%" }}> {this.props.singlblog.text}  </p>
                {this.props.allComments.map(comment => {
                    return (
                        <ViewCommentsWrapper style={{ padding: "2.5rem" }}>
                            <SmallHeader>   {comment.name} </SmallHeader>
                            <p>   {comment.comment} </p>
                            <p>   {comment.created_at} </p>
                        </ViewCommentsWrapper>
                    );
                })}

                {/* <Link> */}
                <div style={{ display: "grid", justifyContent: "center" }} >
                    <ButtonLink onClick={() => this.addComment()}> add comment   </ButtonLink>
                </div>

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
