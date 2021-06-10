const ADD_POST = 'ADD-POST'
const ADD_FIELD_POST = 'ADD-FIELD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_SEND_MESSAGE = 'ADD-FIELD-MESSAGE'

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
        console.log('state changed')
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },
    getState () {
        return this._state
    },
    dispatch (action) {
        if(action.type === ADD_POST) {
            if(this._state.myPosts.newPostTitle || this._state.myPosts.newPostDescription) {
                this._state.myPosts.posts.push({
                    id: this._state.myPosts.posts.length + 1,
                    title: this._state.myPosts.newPostTitle,
                    description: this._state.myPosts.newPostDescription,
                })
                this._state.myPosts.newPostTitle = '';
                this._state.myPosts.newPostDescription = '';
                this._callSubscriber(this._state)
            }
        } else if (action.type === ADD_FIELD_POST) {
            this._state.myPosts[action.field] = action.text;
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            const dialogIndex = this._state.myDialogs.dialogs.findIndex(({idSender}) => idSender === action.idSender)
            this._state.myDialogs.dialogs[dialogIndex].messages.push({
                time: new Date(),
                message: this._state.myDialogs.newSendMessage,
                myMessage: true,
            })
            this._state.myDialogs.newSendMessage = '';
            this._callSubscriber(this._state)
        } else if (action.type === ADD_SEND_MESSAGE) {
            this._state.myDialogs[action.field] = action.text;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const addFieldPostActionCreator = (field, text) => ({type: ADD_FIELD_POST, field, text})

export const addMessageActionCreator = (idSender) => ({type: ADD_MESSAGE, idSender})
export const addFieldMessageActionCreator = (text) => ({type: ADD_SEND_MESSAGE, field: 'newSendMessage', text})

export default store