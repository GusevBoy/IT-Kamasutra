
import { instance } from './config.js'

const followApi = {
    follow: userId => {
        return instance.post(`/follow/${userId}`)
    },
    unfollow: userId => {
        return instance.delete(`/follow/${userId}`)
    }
}

export default followApi