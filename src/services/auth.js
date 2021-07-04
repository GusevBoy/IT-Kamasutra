
import { instance } from './config.js'

const authApi = {
    getAuthMe: () => {
        return instance.get(`auth/me`)
    }
}

export default authApi