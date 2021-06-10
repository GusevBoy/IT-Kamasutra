const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_SEND_MESSAGE = 'ADD-FIELD-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const dialogIndex = state.dialogs.findIndex(({idSender}) => idSender === action.idSender)
            state.dialogs[dialogIndex].messages.push({
                time: new Date(),
                message: state.newSendMessage,
                myMessage: true,
            })
            state.newSendMessage = '';
            return state
        case ADD_SEND_MESSAGE:
            state[action.field] = action.text;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = (idSender) => ({type: ADD_MESSAGE, idSender})
export const addFieldMessageActionCreator = (text) => ({type: ADD_SEND_MESSAGE, field: 'newSendMessage', text})

export default dialogsReducer