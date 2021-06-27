import { setAuthUser } from '../../Redux/auth-reducers'
import authApi from '../../services/auth'
import profileApi from '../../services/profile'

const getAuthProfile = () => {
    return dispatch => {
        const getProfile = async () => {
            authApi.getAuthMe().then(({ data: { data: { email, id, login } } } ) => {
              return profileApi.getProfile(id).then(({data: {photos, contacts}}) => {
                dispatch(setAuthUser(id, login, email, photos, contacts))
              })
            })
          }
          getProfile()
    }
}

export default getAuthProfile