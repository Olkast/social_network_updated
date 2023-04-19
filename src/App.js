import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate,
} from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import LoginContainer from "./components/Login/LoginContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import NavBar from "./components/NavBar/NavBar";
import HeaderContainer from "./components/Header/HeaderContainer";
import styles from "./App.module.css"
import {compose} from "redux";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
  return (
    <Router>
      <div className={styles.appWrapper}>
        <HeaderContainer />
        <NavBar />
        <Routes  className={styles.appWrapperContent}>
          <Route path='/profile/:userId' element={<ProfileContainer/>}/>
          <Route path='/' element={<Navigate to='/users'/>}/>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
          <Route path='/news' element={<News />}/>
          <Route path='/setting' element={<Setting />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/login' element={<LoginContainer />}/>
        </Routes>
      </div>
    </Router>
  )}

const AppContainer = compose(withRouter)(App);
const ReactJsApp = () => {
  return (<React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
  )};


export default ReactJsApp;

















