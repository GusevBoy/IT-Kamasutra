import { createStore, combineReducers, applyMiddleware } from "redux";

import postsReducer from './posts-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import profileReducer from './profile-reducer'
import authReducer from './auth-reducers'
import thunk from 'redux-thunk'

let reducers = combineReducers({
    myPosts: postsReducer,
    myDialogs: dialogsReducer,
    myUsers: usersReducer,
    myProfile: profileReducer,
    auth: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store