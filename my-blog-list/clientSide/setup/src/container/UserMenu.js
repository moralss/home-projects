import React, { Component } from "react";
import { connect } from "react-redux";
import AddBlog from "./AddBlog";
import { ContainerMenu } from "../styles/styles";

class UserMenu extends Component {

    componentWillMount() {

    }



    render() {

        return (
            <ContainerMenu>
                <AddBlog />
            </ContainerMenu>
        );
    }
}



export default connect(
    null,
    null
)(UserMenu);
