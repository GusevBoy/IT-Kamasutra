import {followActionCreator, unfollowActionCreator} from '../../Redux/users-reducer'
import { connect } from 'react-redux';
import Users from './Users';

  const mapStateToProps = (state) => ({
    users: state.myUsers.users,
  })
  const mapDispatchToProps = (dispatch) => ({
    followUser: activeId => {
        dispatch(followActionCreator(activeId))   
    },
    unfollowUser: item => {
        dispatch(unfollowActionCreator(item))
    }
  })
  const UsersConteiner = connect(mapStateToProps, mapDispatchToProps) (Users)
  export default UsersConteiner;