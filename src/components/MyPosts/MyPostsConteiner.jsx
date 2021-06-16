import { addNewTitlePostActionCreator, addNewDescriptionPostActionCreator, addPostActionCreator } from '../../Redux/posts-reducer';

import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    posts: state.myPosts.posts,
    newPostTitle: state.myPosts.newPostTitle,
    newPostDescription: state.myPosts.newPostDescription,
  })
  const mapDispatchToProps = (dispatch) => ({
    updateNewPostTitle: item => dispatch(addNewTitlePostActionCreator(item)),
    updateNewPostDescription: item => dispatch(addNewDescriptionPostActionCreator(item)),
    addPost: () => dispatch(addPostActionCreator())
  })
  const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsConteiner 