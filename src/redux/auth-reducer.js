import {usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_AUTH = "SET_IS_AUTH";


const initialState = {
  _id: null,
  login: null,
  email: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {

  let copyState = { ...state }

  switch (action.type) {
  case SET_USER_DATA:
    copyState._id = action.payload._id
    copyState.login = action.payload.login
    copyState.email = action.payload.email
    return copyState;

  case SET_IS_AUTH:
    copyState.isAuth = action.isAuth
    return copyState;

  default:
    return state;
  }

}

export const setAuthUserData = (_id, login, email) => ({type: SET_USER_DATA, payload: {_id, login, email}});

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});


export const authMeDispatch = () => (dispatch) => {
  usersAPI.authMe().then(response => {
    if(response.data.resultCode === 0) {
      let {_id, login, email} = response.data.data;
      dispatch(setAuthUserData(_id, login, email));
      dispatch(setIsAuth(true))
    }
  })
}

export const updateAuthorization = (login, password, setErrors) => (dispatch) => {
  usersAPI.login(login, password).then(data => {
    if (data.resultCode === 0) {
      const {token} = data.data;
      document.cookie = `token=${token}; path=/`;
      dispatch(authMeDispatch());
    }}).catch((error) => {
    const err = error.response.data.errors.error.issues[0].message
    const messages = err.length > 0 ? err: "Same error";
    setErrors({ login: messages, password: messages})
    console.log(messages)
  })
}

export const logout = () => (dispatch) => {
  usersAPI.logout().then(data => {
    if (data.resultCode === 0) {
      console.log("ddd")
      dispatch(setAuthUserData(null, null, null));
      dispatch(setIsAuth(false))
      document.cookie = `token=${null}; path=/`;
    }})
}

export default authReducer;