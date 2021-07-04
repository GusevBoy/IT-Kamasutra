import React from 'react'
import {
    setCurrentPage,
} from '../../Redux/users-reducer'
import getUsers from '../../Redux/thunks/getUsers'
import toggleFollowing from '../../Redux/thunks/toggleFollowing'
import { connect } from 'react-redux';
import Users from './Users'
import withAuthRedirect from '../../hoc/withAuthRedirect';
class UsersC extends React.Component {
  constructor(props) {
      super(props)
      this.onPageChanged = this.onPageChanged.bind(this)
      this.onClickFollow = this.onClickFollow.bind(this)
  }
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged(pageNumber) {
      this.props.setCurrentPage(pageNumber)
      this.props.getUsers(pageNumber, this.props.pageSize)
  }

  onClickFollow(follow, userId) {
    this.props.toggleFollowing(follow, userId)
  }
  
  render() {
      const { users, totalUsersCount, pageSize, currentPage, isFetching, followingProgress } = this.props
      return (
          <Users
            users={users}
            onClickFollow={this.onClickFollow}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={this.onPageChanged}
            isFetching={isFetching}
            followingProgress={followingProgress}
          />
    )
  }
}
  const mapStateToProps = (state) => ({
    users: state.myUsers.users,
    totalUsersCount: state.myUsers.totalUsersCount,
    pageSize: state.myUsers.pageSize,
    currentPage: state.myUsers.currentPage,
    isFetching: state.myUsers.isFetching,
    followingProgress: state.myUsers.followingProgress,
  })
  const UsersConteiner = withAuthRedirect(connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    toggleFollowing
  }) (UsersC))
  export default UsersConteiner;