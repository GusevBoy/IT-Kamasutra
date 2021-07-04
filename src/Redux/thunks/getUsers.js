import {
    setUsers,
    setTotalUsersCount,
    toggleFetching,
} from '../users-reducer'
import usersApi from '../../services/users'

const getUsers = (currentPage, pageSize) => {
    return dispatch => {
        usersApi.getUsers(currentPage, pageSize).then(({ data }) => {
            if(data.items.length) {
                dispatch(toggleFetching(true))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(toggleFetching(false))
            }
        })
    }
  }

export default getUsers