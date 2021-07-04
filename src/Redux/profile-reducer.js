const SET_PROFILE = 'SET-PROFILE'

let initialState = {
    profile: {},
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default: return state;
    }
}

export const setProfile = profile => ({type: SET_PROFILE, profile})

export default profileReducer