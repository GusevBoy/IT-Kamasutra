const SET_FOLLOW = 'SET-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS'
const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: false,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOW:
            return { 
                ...state,   
                users: state.users.map(item =>  {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            followed: action.followed,
                        }
                    } 
                    return {...item}
                    
                }
            )}
        case SET_USERS:
            return { ...state, users: action.users}
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_FOLLOWING_PROGRESS:
            return { ...state, followingProgress: action.isProgress }
        default: return state;
    }
}

export const followUser = idUser => ({type: SET_FOLLOW, id: idUser, followed: true})
export const unfollowUser = idUser => ({type: SET_FOLLOW, id: idUser, followed: false})
export const setUsers = users => ({type: SET_USERS, users})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const toggleFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = isProgress => ({type: TOGGLE_FOLLOWING_PROGRESS  , isProgress})

export default usersReducer