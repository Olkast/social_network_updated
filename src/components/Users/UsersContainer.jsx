import React from "react";
import {connect} from "react-redux";
import {
  followUser, getUsers1,
  getUsers2,
  toggleFollowingProgress,
  unfollowUser
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUserCount, getUsers
} from "../../redux/Users-selectors";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers1(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged (pageNumber) {
    this.props.getUsers2(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />
    </>

  }
}


const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
};


export default compose(
  connect(mapStateToProps, {
    followUser, unfollowUser,
    toggleFollowingProgress, getUsers1,
    getUsers2}), withAuthRedirect)(UsersContainer)

