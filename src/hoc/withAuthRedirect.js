import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";


const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export const withAuthRedirect = (Component) => {

  const RedirectComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      if(!props.isAuth) {
        navigate("/login");
      }
    }, [props.isAuth, navigate]);


    return <Component {...props} />
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);

}





