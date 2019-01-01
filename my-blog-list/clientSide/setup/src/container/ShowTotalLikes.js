import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";



class ShowTotalLikes extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    componentDidMount() {
        
        this.getTotalLikes(this.props.blogId);

    }


    getTotalLikes = async (blogId) => {

        await this.props.getTotalLikes(blogId)

    }

    render() {
        // {this.getTotalLikes(blog.id)}
        console.log("show total ", this.props.blogId);

        return (
            <div className="ShowTotalLikes">


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authorBlogs: state.profile.authorsBlogs,
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getTotalLikes: (blogId) => dispatch(thunks.getTotalLikes(blogId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowTotalLikes);
