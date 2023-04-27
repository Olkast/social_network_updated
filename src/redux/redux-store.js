import {applyMiddleware, combineReducers, legacy_createStore, compose} from "redux"
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


const reducers = combineReducers ({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));


export default store;