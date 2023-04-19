import React from "react";
import styles from "./Users.module.css";
import autoPhoto from "../assets/images/autoPhoto.png";
import {NavLink} from "react-router-dom";


let Users = (props) => {

  let pagesCount = props.totalUserCount / props.pageSize;

  let pages = [];
  for(let i=1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    <div>
      {pages.map(number => {
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        return <span key={number} onClick={() => {props.onPageChanged(number)}}
          className={props.currentPage === number ? styles.selectorPage : undefined}>{number}
        </span>
      })}
    </div>

    {props.users.map((user) => (
      <div key={user._id}>

        <span>
          <div>
            <NavLink to={"/profile/" + user._id}>
              <img alt="" src={user.photos.small != null ? user.photos.small : autoPhoto} className={styles.photo}/>
            </NavLink>
          </div>
          <div>
            {user.followed ?
              <button disabled={props.followingInProgress.some( id => id === user._id)}
                onClick={() => {props.followUser(user._id)}
                }>unfollow</button> :
              <button disabled={props.followingInProgress.some( id => id === user._id)}
                onClick={() => {props.unfollowUser(user._id)}
                }>follow</button>}
          </div>
        </span>
        <span>
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </span>
      </div>
    )
    )}
  </div>
}

export default Users;