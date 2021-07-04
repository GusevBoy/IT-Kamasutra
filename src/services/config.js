import * as axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b8470ef4-9344-4bac-80c8-43a8a5f844e5',
    }
})