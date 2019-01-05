import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import Profile from "./Profile";
import { reduxForm, Field } from "redux-form";
import history from '../history';

class AddComments extends Component {
    constructor() {
        super()
    }

    handleSubmit = (data) => {
        const blogId = this.props.match.params.blogid;
        const blogInfo = { id: blogId, text: data.text };
        this.props.addComment(blogInfo);
        history.push(`/viewcomments/${blogId}`);

    }

    render() {
        const { handleSubmit } = this.props;


        return (
            <div className="Commits">
                <Profile />
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field type="text" name="text" value="name" component="input" />
                    <input type="submit" />

                </form>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (blogId) => dispatch(thunks.addComment(blogId))
    };
}



const CommentFormConfig = reduxForm({
    form: "addComment"
})(AddComments);

export default connect(
    null,
    mapDispatchToProps
)(CommentFormConfig);
