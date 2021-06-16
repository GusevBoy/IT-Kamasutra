const ADD_POST = 'ADD-POST'
const ADD_FIELD_POST = 'ADD-FIELD-POST'

let initialState = {
    posts: [
        {
            title: 'How to catch Naruto?', 
        },
        {
            title: 'Orochimaru snakes', 
        },
        {
            title: "Hidan's immortality", 
        },
        {
            title: 'Destruction of Konoha', 
        },
        {
            title: 'Captured jinchūriki', 
        }
    ],
    newPostTitle: '',
    newPostDescription: '',
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts.length + 1,
                    title: state.newPostTitle,
                    description: state.newPostDescription,
                }],
            
                newPostTitle: '',
                newPostDescription: '',
            }
        case ADD_FIELD_POST:
            return {
                ...state,
                [action.field]: action.text,
            }
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addNewTitlePostActionCreator = text => ({type: ADD_FIELD_POST, field: 'newPostTitle', text})
export const addNewDescriptionPostActionCreator = text => ({type: ADD_FIELD_POST, field: 'newPostDescription', text})

export default postsReducer