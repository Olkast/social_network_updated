import React from "react";
import styles from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";
import {connect} from "react-redux";

const NavBar = (props) => {
  const userId = props.userId

  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.active : undefined
        } to={`/profile/${userId}`}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.active : undefined
        } to="/dialogs">Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.active : undefined
        } to="/news">News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.active : undefined
        } to="/music">Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.active : undefined
        } to="/setting">Setting</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.active : undefined
        } to="/users">Users</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={({ isActive }) =>
          isActive ? styles.active : undefined
        } to="/friends"><Friends/></NavLink>
      </div>
    </nav>
  )
}


const mapStateToProps = (state) => {
  return {
    userId: state.auth._id
  }
}


export default connect(mapStateToProps)(NavBar);