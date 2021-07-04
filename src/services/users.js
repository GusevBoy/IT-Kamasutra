
import { instance } from './config.js'

const usersApi = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}

export default usersApi