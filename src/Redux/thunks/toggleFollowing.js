import {
    toggleFollowingProgress,
    followUser,
    unfollowUser,
} from '../users-reducer'
import followApi from '../../services/follow'

const toggleFollowing = (follow, userId) => {
    return dispatch => {
        dispatch(toggleFollowingProgress(true))
        if(follow) {
          followApi.follow(userId).then(() => {
            dispatch(followUser(userId))
          }).finally(() => dispatch(toggleFollowingProgress(false)))
        } else {
          followApi.unfollow(userId).then(() => {
            dispatch(unfollowUser(userId))
          }).finally(() => dispatch(toggleFollowingProgress(false)))
        }
    }
}

export default toggleFollowing