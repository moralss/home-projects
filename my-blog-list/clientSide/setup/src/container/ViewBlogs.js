import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import {
  ViewBlogsContainer, Paragraph, HeaderLarge,
  ViewBlogsWrapper,
  SmallHeader
} from "../styles/styles";
import * as thunks from "../action/thunk";
import * as normal from "../action/normal-actions";
import { Link } from "react-router-dom";
import history from '../history'

class ViewBlogs extends Component {

  componentWillMount() {
    this.getAllBlogs();
    this.props.toggleSearchBar(true)
  }


  // componentWillReceiveProps(nextProps) {
  //   console.log("navbar ...", history.location.pathname)
  // }


  async getAllBlogs() {
    await this.props.getAllBlogs();
  }

  render() {

    return (
      <ViewBlogsContainer class="gery">
        <HeaderLarge> All latest Blogs </HeaderLarge>
        {this.props.allBlogs.map(blog => {
          return (
            <ViewBlogsWrapper >
              <SmallHeader>  {blog.name}</SmallHeader>
              <Paragraph>  text : {blog.text} </Paragraph>
              <span> updated time : {blog.updated_at} </span>
              <li>
                <a href="#">
                  <Link to={`/authorblogs/${blog.author_id}`} >View Profile </Link>
                </a>
              </li>
            </ViewBlogsWrapper>
          );

          
        })}
        {this.props.allBlogs.length === 0 ? "no blogs" : null}
      </ViewBlogsContainer>
    );

  }
}

function mapStateToProps(state) {
  return {
    allBlogs: state.user.allBlogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllBlogs: () => dispatch(thunks.getAllBlogs()),
    toggleSearchBar: (status) => dispatch(normal.toggleSearchBar(status))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewBlogs);
