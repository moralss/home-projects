import React, { Component } from "react";
import "../App.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../action/thunk/index";
import renderField from "../components/Input";
import { callCheck } from "../routes/routes";
import { checkAuth } from "../utils/checkAuth";
import { Search } from "../styles/styles";

class SearchBar extends Component {
    constructor() {
        super();

    }


    componentDidMount() {
        // callCheck();
        // checkAuth()
    }




    handleSubmit = async data => {
        console.log("data" , data.name)
        await this.props.getSearchResults(data.name);
    };


    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="Form">
                {/* <HeaderLarge> Register Form </HeaderLarge> */}
                <Search onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field type="text"  name="name" component={renderField} />
                    <input type="submit" disabled={submitting} />
                </Search>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
            getSearchResults: (data) =>
            dispatch(thunks.getSearchResults(data))
        };
}


function mapStateToProps(state) {
    return { errors: state.errors.errors }
}


const registerUser = reduxForm({
    form: "searchBar"
})(SearchBar);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(registerUser);
