import {addMessageActionCreator, addFieldMessageActionCreator} from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

  const mapStateToProps = (state) => ({
    dialogs: state.myDialogs.dialogs,
    newSendMessage: state.myDialogs.newSendMessage,
    users: state.myUsers.users,
  })
  const mapDispatchToProps = (dispatch) => ({
    addMessage: activeId => {
     dispatch(addMessageActionCreator(activeId))   
    },
    updateNewMessage: item => {
        dispatch(addFieldMessageActionCreator(item))
    }
  })
  const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps) (Dialogs)
  
  export default DialogsConteiner;