import React, { Component } from "react";
import "../App.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as thunks from "../action/thunk/index";
import renderField from "../components/Input";
import { callCheck } from "../routes/routes";
import { checkAuth } from "../utils/checkAuth";
import { Search , SearchButton} from "../styles/styles";
import sprite from "../img/sprite.svg"


class SearchBar extends Component {
    constructor() {
        super();

    }


    componentDidMount() {
        // callCheck();
        // checkAuth()
    }




    handleSubmit = async data => {
        console.log("data", data.name)
        await this.props.getSearchResults(data.name);
    };


    render() {
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="Form">
                <Search onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field type="text" name="name" component={renderField} />
                    <SearchButton type="submit" disabled={submitting} >
                        <svg>
                            <use xlinkHref={`${sprite}#icon-search`} />
                        </svg>
                    </SearchButton>
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
