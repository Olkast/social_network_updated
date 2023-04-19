import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

const initialState = {
  postData: [
    {id: 1, text: "Hello"},
    {id: 2, text: "Hello, girl"},
    {id: 3, text: "Hello, friend"},
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {

  let copyState = { ...state }

  switch (action.type) {
  case ADD_POST:
    // eslint-disable-next-line no-case-declarations
    const newPost = {
      id: Date.now(),
      text: action.newText,
    }
    copyState.postData = [...state.postData];
    copyState.postData.push(newPost);
    return copyState;

  case SET_USERS_PROFILE:
    copyState.profile = action.profile;
    return copyState;

  case SET_STATUS:
    copyState.status = action.status;
    return copyState;

  case UPDATE_STATUS:
    copyState.status = action.status;
    return copyState;

  default:
    return state;
  }
}

export const AddPostActionCreator = (newText) => ({type: ADD_POST, newText});

export const UpDatePostActionCreator = (text) => ({
  type: UPDATE_POST, text: text});

export const setUsersProfile = (profile) =>
  ({type: SET_USERS_PROFILE, profile: profile});

export const setStatus = (status) =>
  ({type: SET_STATUS, status: status});

export const idProfile = (userId) => {
  return (dispatch) => {
    usersAPI.idProfile(userId).then(data => {
      dispatch(setUsersProfile(data));
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data.data.status));
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
  }
}

export default profileReducer;