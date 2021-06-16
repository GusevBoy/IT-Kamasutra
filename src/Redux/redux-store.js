import { createStore, combineReducers } from "redux";

import postsReducer from './posts-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
    myPosts: postsReducer,
    myDialogs: dialogsReducer,
    myUsers: usersReducer,
})

const store = createStore(reducers)

export default store