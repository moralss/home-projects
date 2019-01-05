import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";

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
    }



    render() {
        return (
            <div className="Commits">
                {this.props.allComments.map(comment => {
                    return (
                        <div>
                            <li>  name : {comment.name} </li>
                            <li>  comment : {comment.comment} </li>
                            <li>  created at : {comment.created_at} </li>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        allComments: state.comments.allCommentsForblog,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (blogId) => dispatch(thunks.addComment(blogId))
        , getAllComments: (blogId) =>
            dispatch(thunks.getAllComments(blogId)),

    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewComments);
