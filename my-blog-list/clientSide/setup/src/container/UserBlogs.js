import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { Link } from "react-router-dom";


class UserBlogs extends Component {
  componentWillMount() {
    this.props.getUserBlogs();
  }


  deleteBlog = async blogId => {
    await this.props.deleteBlog(blogId);
    await this.props.getUserBlogs();
  };

  render() {
    const { latestBlog } = this.props;

    return (
      <div className="LatestBlog">
        <h1> blog post </h1>
        <div>
          {latestBlog.map(blog => {
            return (
              <div>
                <button onClick={() => this.deleteBlog(blog.id)}>
                  Delete
                </button>
                <Link to={`/editblog/${blog.id}`}>edit blog </Link>
                {blog.text}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { latestBlog: state.user.latestBlog };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserBlogs: () => dispatch(thunks.getUserBlogs()),
    deleteBlog: blogId => dispatch(thunks.deleteBlog(blogId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserBlogs);
