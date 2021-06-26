import { createStore, combineReducers } from "redux";

import postsReducer from './posts-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import profileReducer from './profile-reducer'
import authReducer from './auth-reducers'

let reducers = combineReducers({
    myPosts: postsReducer,
    myDialogs: dialogsReducer,
    myUsers: usersReducer,
    myProfile: profileReducer,
    auth: authReducer,
})

const store = createStore(reducers)

export default store