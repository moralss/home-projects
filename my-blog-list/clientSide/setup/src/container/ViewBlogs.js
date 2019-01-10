import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import {
  ViewBlogsContainer, Paragraph, HeaderLarge,
  ViewBlogsWrapper,
  SmallHeader
} from "../styles/styles";
import * as thunks from "../action/thunk";
import { Link } from "react-router-dom";

class ViewBlogs extends Component {

  componentDidMount() {
    this.getAllBlogs();
  }


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
    getAllBlogs: () => dispatch(thunks.getAllBlogs())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewBlogs);
