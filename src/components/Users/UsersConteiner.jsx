import React from 'react'
import usersApi from '../../services/users'
import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    toggleFollowingProgress,
} from '../../Redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'
import followApi from '../../services/follow'
class UsersC extends React.Component {
  constructor(props) {
      super(props)
      this.onPageChanged = this.onPageChanged.bind(this)
      this.fetchUsers = this.fetchUsers.bind(this)
      this.onClickFollow = this.onClickFollow.bind(this)
  }
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.toggleFetching(true)
    this.fetchUsers(currentPage, pageSize)
  }

  onPageChanged(pageNumber) {
      this.props.toggleFetching(true)
      this.props.setCurrentPage(pageNumber)
      this.fetchUsers(pageNumber, this.props.pageSize)
  }

  fetchUsers(currentPage, pageSize) {
    usersApi.getUsers(currentPage, pageSize).then(({ data }) => {
        if(data.items.length) {
            this.props.toggleFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        }
    })
  }

  onClickFollow(follow, userId) {
    
    const {toggleFollowingProgress, followUser, unfollowUser} = this.props
    toggleFollowingProgress(true)
    if(follow) {
      followApi.follow(userId).then(() => {
        followUser(userId)
      }).finally(() => toggleFollowingProgress(false))
    } else {
      followApi.unfollow(userId).then(() => {
        unfollowUser(userId )
      }).finally(() => toggleFollowingProgress(false))
    }
    
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
  const UsersConteiner = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    toggleFollowingProgress,
  }) (UsersC)
  export default UsersConteiner;