import React from 'react'
import {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
} from '../../Redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users'
import * as axios from 'axios'
class UsersC extends React.Component {
  constructor(props) {
      super(props)
      this.onPageChanged = this.onPageChanged.bind(this)
  }
  componentDidMount() {
      this.props.toggleFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(({data}) => {
          if(data.items.length) {
              this.props.toggleFetching(false)
              this.props.setUsers(data.items)
              this.props.setTotalUsersCount(data.totalCount)
          }
      })
  }

  onPageChanged(pageNumber) {
      this.props.toggleFetching(true)
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(({data: { items }}) => {
          if(items.length) {
              this.props.toggleFetching(false)
              this.props.setUsers(items)
          }
      })
  }
  
  render() {
      const { users, followUser, unfollowUser, totalUsersCount, pageSize, currentPage, isFetching } = this.props
      return (
          <Users
          users={users}
          followUser={followUser}
          unfollowUser={unfollowUser}
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChanged={this.onPageChanged}
          isFetching={isFetching}
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
  })
  const UsersConteiner = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
  }) (UsersC)
  export default UsersConteiner;