import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {

  return (
    <div className = {styles.item}>
      <img src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/28/150728212130__84509634_trex-nhm-976.jpg" alt=""/>
      <h5>
        {props.text}
      </h5>
    </div>
  )
}

export default Post;