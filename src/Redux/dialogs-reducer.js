const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_SEND_MESSAGE = 'ADD-FIELD-MESSAGE'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            {
                let newState = {...state}
                const dialogIndex = newState.dialogs.findIndex(({idSender}) => idSender === action.idSender)
                newState.dialogs[dialogIndex].messages.push({
                    time: new Date(),
                    message: newState.newSendMessage,
                    myMessage: true,
                })
                newState.newSendMessage = '';
                return newState
            }
        case ADD_SEND_MESSAGE:
            return {
                ...state,
                [action.field]: action.text,
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (idSender) => ({type: ADD_MESSAGE, idSender})
export const addFieldMessageActionCreator = (text) => ({type: ADD_SEND_MESSAGE, field: 'newSendMessage', text})

export default dialogsReducer