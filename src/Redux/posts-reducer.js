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
            if(state.newPostTitle || state.newPostDescription) {
                state.posts.push({
                    id: state.posts.length + 1,
                    title: state.newPostTitle,
                    description: state.newPostDescription,
                })
                state.newPostTitle = '';
                state.newPostDescription = '';
            }
            return state
        case ADD_FIELD_POST:
            state[action.field] = action.text;
            return state;
        default: return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addFieldPostActionCreator = (field, text) => ({type: ADD_FIELD_POST, field, text})

export default postsReducer