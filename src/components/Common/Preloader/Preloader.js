import React from "react";
import PreloaderImg from "../../assets/images/Preloader.gif"

const Preloader = () => {
  return <div style={ {backgroundColor : "white"}}>
    <img alt="" src={PreloaderImg} />
  </div>
}

export default Preloader;