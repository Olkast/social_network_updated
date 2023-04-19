import axios from "axios";
import {usersAPI} from "../api/api";
import getCoockie from "../helpers/getCoockie";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_TOTAL_USER_COUNT = "TOGGLE_TOTAL_USER_COUNT";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


const initialState = {
  users: [],
  pageSize: 3,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {


  switch (action.type) {
  case FOLLOW:

    return {
      ...state,
      users: state.users.map ( user => {
        if (user._id === action.userId) {
          return { ...user, followed: true};
        }
        return user;
      } )};

  case UNFOLLOW:
    return {
      ...state,
      users: state.users.map(user => {
        if (user._id === action.userId) {
          return { ...user, followed: false};
        }
        return user;
      })};


  case SET_USERS:
    return { ...state, users: action.users  };

  case SET_CURRENT_PAGE:
    return { ...state, currentPage: action.number };

  case SET_TOTAL_USER_COUNT:
    return { ...state, totalUserCount: action.totalUserCount };

  case TOGGLE_TOTAL_USER_COUNT:
    return { ...state, isFetching: action.isFetching };

  case TOGGLE_IS_FOLLOWING_PROGRESS:
    return { ...state,
      followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter( _id => _id !== action.userId) };

  default:
    return state;
  }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (number) => ({type: SET_CURRENT_PAGE, number});

export const setTotalUserCount = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, totalUserCount});

export const toggleUserCount = (isFetching) => ({type: TOGGLE_TOTAL_USER_COUNT, isFetching});

export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export const getUsers1 = (currentPage, pageSize) => {
  return (dispatch) => {
    const token = getCoockie("token");
    dispatch(toggleUserCount(true));
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    usersAPI.getUsers(currentPage,pageSize).then(data => {
      dispatch(toggleUserCount(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
    });
  }
}

export const getUsers2 = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleUserCount(true));
    usersAPI.getUsers(pageNumber, pageSize).then(data=> {
      dispatch(toggleUserCount(false));
      dispatch(setUsers(data.items));
    });
  }
}

// const followUnfollowFlow = (dispatch, userId, apiMethod, actionCreator) => {
//         apiMethod(userId).then(data => {
//             if(data.resultCode === 0) {
//                 dispatch(unfollowSuccess(userId));
//             }
//             dispatch(toggleFollowingProgress(false, userId))
//         });
// }

export const followUser = (userId) => {
  return (dispatch) => {
    usersAPI.followId(userId).then(data => {
      if(data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId))
    });
  }
}

export const unfollowUser = (userId) => {
  return (dispatch) => {
    usersAPI.unFollowId(userId).then(data => {
      if(data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}


export default usersReducer;