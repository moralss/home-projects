import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { ViewBlogsContainer , Paragraph , HeaderLarge , ViewBlogsWrapper} from "../styles/styles";
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
      <ViewBlogsContainer>
        <HeaderLarge> All latest Blogs </HeaderLarge>

        {this.props.allBlogs.map(blog => {
          return (
            <ViewBlogsWrapper >
              <h1>  {blog.name}</h1>
              <Paragraph>  text : {blog.text} </Paragraph>
              <span> updated time : {blog.updated_at} </span>
              <li>
                <Link to={`/authorblogs/${blog.author_id}`} >View Profile </Link>
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
