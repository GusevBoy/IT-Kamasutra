const SET_AUTH_USER = 'SET-AUTH-USER'
const SET_IS_LOADING = 'SET-IS-LOADING'

const initialState = {
    userId: '',
    login: '',
    email: '',
    photos: '',
    contacts: '',
    isAuth: false,
    isLoading: true,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: 
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default: return state;
    }
}



export const setAuthUser = (userId, login, email, photos, contacts) => ({type: SET_AUTH_USER, data: {userId, login, email, photos, contacts}})
export const setLoading = isLoading => ({type: SET_IS_LOADING, isLoading})

export default authReducer