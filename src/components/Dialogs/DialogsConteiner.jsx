import {addMessageActionCreator, addFieldMessageActionCreator} from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext';

const DialogsConteiner = ( ) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const { myDialogs: { dialogs, newSendMessage }, users } = store.getState()
                    const { dispatch } = store
                    return (
                        <Dialogs
                            addMessage={activeId => dispatch(addMessageActionCreator(activeId))}
                            updateNewMessage={item => dispatch(addFieldMessageActionCreator(item))}
                            dialogs={dialogs}
                            users={users}
                            newSendMessage={newSendMessage}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
  }
  
  export default DialogsConteiner;