const SET_FOLLOW = 'SET-FOLLOW'
const initialState = { 
    users: [
        {
            img: 'https://sketchok.com/images/articles/06-anime/023-naruto/17/11.jpg',
            login: 'Itachi',
            id: '1ac-i-v-2',
            status: 'Self-sacrifice…',
            follow: true,
        },
        {
            img: 'https://www.pngitem.com/pimgs/m/533-5331003_render-naruto-pain-naruto-pain-face-png-transparent.png',
            login: 'Pain',
            id: '2as-f-g-4',
            status: 'Today I choose life',
            follow: true,
        },
        {
            img: 'https://i.pinimg.com/originals/d8/47/fd/d847fd7264cf58b2dcce68fb207ddd30.jpg',
            login: 'Conan',
            id: '3df-f-o-3',
            status: 'I have received the will of god and I must kill you',
            follow: false,
        },
        {
            img: 'https://cdn141.picsart.com/320176969123201.jpg?type=webp&to=min&r=640',
            login: 'Deidara',
            id: '4pp-a-q-3',
            status: 'art is an explosion!!!',
            follow: true,
        },
        {
            img: 'https://i.pinimg.com/originals/49/79/34/497934ae5effa963835929a842a2c792.jpg',
            login: 'Hidan',
            id: '5vf-4-4-2',
            status: "Now! Let's savour the utmost of suffering together!",
            follow: false,
        },
        {
            img: 'https://pbs.twimg.com/media/DaAn01QWkAAeDou?format=jpg&name=small',
            login: 'Orachimaru',
            id: '6dd-3-d-3',
            status: 'Maybe, just maybe, there is no purpose in life…',
            follow: false,
        },
        {
            img: 'https://i.pinimg.com/originals/e6/d5/76/e6d57651e96e35163349c5765ba4fa9e.png',
            login: 'Kakuzu',
            id: '6jj-k-d-3',
            status: 'Even Hell runs on money.',
            follow: false,
        },
        {
            img: 'https://i.pinimg.com/originals/e6/d5/76/e6d57651e96e35163349c5765ba4fa9e.png',
            login: 'Kisame Hoshigaki',
            id: '9ff-f-f-9',
            status: "Looks like You're Crying",
            follow: true,
        },
        {
            img: 'https://i.pinimg.com/originals/d3/36/d8/d336d843a8195f168f4d65b3661d9199.jpg',
            login: 'Tobi',
            id: '5tu-q-g-2',
            status: "No one cared who I was until I put on a mask.",
            follow: false,
        },
    ]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOW:
            
            return { 
                users: state.users.map(item =>  {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            follow: action.follow,
                        }
                    } 
                    return {...item}
                    
                }
            )}
        default: return state;
    }
}

export const followActionCreator = (idUser) => ({type: SET_FOLLOW, id: idUser, follow: true})
export const unfollowActionCreator = (idUser) => ({type: SET_FOLLOW, id: idUser, follow: false})

export default usersReducer