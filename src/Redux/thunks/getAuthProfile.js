import { setAuthUser, setLoading } from '../../Redux/auth-reducers'
import authApi from '../../services/auth'
import profileApi from '../../services/profile'

const getAuthProfile = () => {
    return dispatch => {
        const getProfile = async () => {
          dispatch(setLoading(true))
            await authApi.getAuthMe().then(({ data: { data: { email, id, login } } } ) => {
              if(id) {
                return profileApi.getProfile(id).then(({data: {photos, contacts}}) => {
                  dispatch(setAuthUser(id, login, email, photos, contacts))
                }) 
              }
            }).finally(() => dispatch(setLoading(false)))
          }
          getProfile()
    }
}

export default getAuthProfile