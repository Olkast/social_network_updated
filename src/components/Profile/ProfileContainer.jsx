import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {idProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
// import {useFormik} from "formik";



export function withRouter(Children){
  // eslint-disable-next-line react/display-name
  return (props) => {
    const match  = {params: useParams()};
    return <Children {...props}  match = {match}/>
  }
}

class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (userId === "null") {
      return (<Navigate to={"/login"} />)
    } else {
      this.props.idProfile(userId)
    }
    this.props.getStatus(userId)
  }

  render() {
    if (this.props.match.params.userId === "null") {
      return <Navigate to={"/login"} />
    }

    return <Profile  {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
  }


}


const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect (mapStateToProps,{idProfile, getStatus, updateStatus}),
  withRouter, withAuthRedirect
)(ProfileContainer)


