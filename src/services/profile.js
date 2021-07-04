
import { instance } from './config.js'

const profileApi = {
    getProfile: (profileId) => {
        return instance.get(`/profile/${profileId}`)
    }
}

export default profileApi