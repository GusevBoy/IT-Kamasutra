const SET_AUTH_USER = 'SET-AUTH-USER'

const initialState = {
    userId: '',
    login: '',
    email: '',
    isAuth: false,
    photos: '',
    contacts: '',
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: 
            return { 
                ...state,
                ...action.data,
                isAuth: true,
            }
        default: return state;
    }
}



export const setAuthUser = (userId, login, email, photos, contacts) => ({type: SET_AUTH_USER, data: {userId, login, email, photos, contacts}})

export default authReducer