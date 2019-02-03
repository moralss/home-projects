import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { reduxForm, Field } from "redux-form";
import history from '../history';
import { FormSide, AddBlogContainer, HeaderLarge } from "../styles/styles";
import TextArea from '../components/TextArea';


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
                <AddBlogContainer style={{paddingBottom:"0.1rem"}}>
                    <HeaderLarge> Comment </HeaderLarge>
                    <FormSide onSubmit={handleSubmit(this.handleSubmit)}>
                        <label> enter comment </label>
                        <Field type="text" name="text" component={TextArea} />
                        <button> Submit </button>
                    </FormSide>
                </AddBlogContainer>
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
