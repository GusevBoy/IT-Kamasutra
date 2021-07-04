import profileApi from '../../services/profile'
import { setProfile } from '../../Redux/profile-reducer'

const getProfile = (profileId) => {
    return dispatch => {
        profileApi.getProfile(profileId).then(({data}) => {
            if(data) {
                dispatch(setProfile(data))
            }
        })
    }
}

export default getProfile