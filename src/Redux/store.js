import postsReducer from './posts-reducer'
import dialogsReducer from './dialogs-reducer'
const store = {
    _state: {
        userId: '6dd-3-d-3',
        users: [
            {
                img: 'https://sketchok.com/images/articles/06-anime/023-naruto/17/11.jpg',
                login: 'Itachi',
                id: '1ac-i-v-2',
            },
            {
                img: 'https://www.pngitem.com/pimgs/m/533-5331003_render-naruto-pain-naruto-pain-face-png-transparent.png',
                login: 'Pain',
                id: '2as-f-g-4',
            },
            {
                img: 'https://i.pinimg.com/originals/d8/47/fd/d847fd7264cf58b2dcce68fb207ddd30.jpg',
                login: 'Conan',
                id: '3df-f-o-3',
            },
            {
                img: 'https://cdn141.picsart.com/320176969123201.jpg?type=webp&to=min&r=640',
                login: 'Deidara',
                id: '4pp-a-q-3',
            },
            {
                img: 'https://i.pinimg.com/originals/49/79/34/497934ae5effa963835929a842a2c792.jpg',
                login: 'Hidan',
                id: '5vf-4-4-2',
            },
            {
                img: 'https://pbs.twimg.com/media/DaAn01QWkAAeDou?format=jpg&name=small',
                login: 'Orachimaru',
                id: '6dd-3-d-3',
            },
        ],
        myPosts: {
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
        },
        myDialogs: {
            dialogs: [
                {
                    id: '222-333',
                    idSender: '6dd-3-d-3',
                    messages: [
                        {
                            time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                            message: 'Hi',
                        },
                        {
                            time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                            message: 'You must find second Jinchurike',
                        },
                        {
                            time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                            message: 'ok, we started hounting',
                            myMessage: true,
                        },
                        {
                            time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                            message: 'good',
                        },
                    ]
                },
                {
                    id: '222-322',
                    idSender: '4pp-a-q-3',
                    messages: [
                        {
                            time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                            message: 'Boom!',
                        },
                        {
                            time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                            message: 'Yee, bro, boom, boom ))',
                            myMessage: true,
                        },
                    ]
                },
            ],
            newSendMessage: '',
        },

    },
    _callSubscriber () {
        console.error('state changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    getState () {
        return this._state
    },
    dispatch (action) {
        this._state.myPosts = postsReducer(this._state.myPosts, action)
        this._state.myDialogs = dialogsReducer(this._state.myDialogs, action)
        this._callSubscriber(this._state)
    }
}

export default store