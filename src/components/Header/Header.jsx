import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

  return (
    <div className = {styles.header}>
      <img src="https://w-dog.ru/wallpapers/1/19/329834159931343/logo-belye-naushniki-na-golubom-fone.jpg" alt=""/>
      {props.isAuth?
        <div className={styles.registered}>{props.login} <button onClick={props.logout}>Log out</button></div>
        : <div className={styles.loginBlock}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      }
    </div>

  )
}


export default Header;