import React from "react";
import styles from "./ProfileInfo.module.css"
import Preloader from "../../../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHook"

const ProfileInfo = (props) => {

  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <p>{props.profile.fullName}</p>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;


