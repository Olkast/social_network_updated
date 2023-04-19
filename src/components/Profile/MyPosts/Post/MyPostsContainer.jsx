import {AddPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import PostForm from "../PostForm";

const mapStateToProps = (state) => {
  return {
    profilePage:state.profilePage,
    newPostText:state.profilePage.newPostText,
    postData:state.profilePage.postData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddPost: (newText) => {
      dispatch(AddPostActionCreator(newText));
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostForm);


export default MyPostsContainer;