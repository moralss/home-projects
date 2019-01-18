import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import * as thunks from "../action/thunk";
import { Link } from "react-router-dom";
import {
  ViewContainer, ViewTotalContainer,
  LinksContainer,
  ListWrapper, Text,
  Button,
  HeaderLarge,
  SvgBubble
} from "../styles/styles";
import sprite from "../img/sprite.svg"



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


    // totalComments: 1,
    // totalLikes: 1 


    return (
      <div className="LatestBlog">
        <HeaderLarge> blog post </HeaderLarge>
        <ListWrapper>
          {latestBlog.map(blog => {
            return (
              <ViewContainer>
                <Text>  {blog.text}</Text>
                <ViewTotalContainer>
                  <p> total likes : {blog.totalLikes}</p>
                  <SvgBubble>
                    <svg>
                      <use xlinkHref={`${sprite}#icon-bubble`} />
                    </svg>
                  <p> {blog.totalComments}</p>
                  </SvgBubble>

                </ViewTotalContainer>
                <LinksContainer>
                  <a href="#">
                    <Link to={`/editblog/${blog.id}`}>
                      edit blog </Link>
                  </a>
                  <a href="#">
                    <Link to={`/comments/${blog.id}`}>
                      add Commit </Link>
                  </a>
                  <a href="#">
                    <Link to={`/viewcomments/${blog.id}`}>
                      view Commits </Link>
                  </a>
                </LinksContainer>
                <Button onClick={() => this.deleteBlog(blog.id)}>
                  Delete
                </Button>

              </ViewContainer>
            );
          })}
        </ListWrapper>
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
