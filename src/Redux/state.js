import renderTree from '../render.js'

const state = {
    users: [
        {
            img: 'https://sketchok.com/images/articles/06-anime/023-naruto/17/11.jpg',
            login: 'Itachi',
            id: '1',
        },
        {
            img: 'https://www.pngitem.com/pimgs/m/533-5331003_render-naruto-pain-naruto-pain-face-png-transparent.png',
            login: 'Pain',
            id: '2',
        },
        {
            img: 'https://i.pinimg.com/originals/d8/47/fd/d847fd7264cf58b2dcce68fb207ddd30.jpg',
            login: 'Conan',
            id: '3',
        },
        {
            img: 'https://cdn141.picsart.com/320176969123201.jpg?type=webp&to=min&r=640',
            login: 'Deidara',
            id: '4',
        },
        {
            img: 'https://i.pinimg.com/originals/49/79/34/497934ae5effa963835929a842a2c792.jpg',
            login: 'Hidan',
            id: '5',
        },
        {
            img: 'https://alchetron.com/cdn/orochimaru-naruto-ea5b7b10-ecd0-45a2-b72d-86ee480ca76-resize-750.jpg',
            login: 'Orachimaru',
            id: '6',
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
    dialogs: {
        1: [
            {
                time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                senderId: '2',
                message: 'Hi',
            },
            {
                time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                senderId: '2',
                message: 'You must find second Jinchurike',
            },
            {
                time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                senderId: '1',
                message: 'ok, we started hounting',
            },
            {
                time: '2021-02-25T18:25+03 2021-01-25T18:25+03:00',
                senderId: '2',
                message: 'good',
            },
        ]
    },
}

export const addPost = (values) => {
    state.myPosts.posts.push({
        id: state.myPosts.posts.length + 1,
        ...(state.myPosts.newPostTitle && {title: state.myPosts.newPostTitle}),
        ...(state.myPosts.newPostDescription && {description: state.myPosts.newPostDescription}),
    })
    renderTree(state)

}
export const addFieldPost = (value, field) => {
    state.myPosts[field] = value;
    renderTree(state)
}

export default state