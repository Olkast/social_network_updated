import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeDispatch} from "../../redux/auth-reducer";
import {logout} from "../../redux/auth-reducer";
import getCoockie from "../../helpers/getCoockie";



class HeaderContainer extends React.Component {

  authMe () {
    const token = getCoockie("token");
    if (token && !this.props._id) {
      this.props.authMeDispatch()
    }
  }

  componentDidMount() {
    this.authMe()
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps._id !== this.props._id || nextProps.isAuth !== this.props.isAuth) {
      this.authMe()
      return true;
    } else {
      return false
    }
  }


  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    _id: state.auth._id,
  }
};


export default connect(mapStateToProps, {authMeDispatch, logout})(HeaderContainer);