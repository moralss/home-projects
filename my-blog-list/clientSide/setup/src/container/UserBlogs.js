import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { Link } from "react-router-dom";


class Blog extends Component {
  componentWillMount() {
    this.props.getUserBlogs();
  }

  showLatestBlog() {
    const { latestBlog } = this.props;
            // if (latestBlog.length === 0) {
            //   return <div> Loading ...</div>;

            // } else if (latestBlog) {


      return (
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
      );
    // }
  }

  deleteBlog = async blogId => {
    await this.props.deleteBlog(blogId);
    await this.props.getLatestBlog();
  };

  render() {

    return (
      <div className="LatestBlog">
        <h1> blog post </h1>
        {this.showLatestBlog()}
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
)(Blog);
