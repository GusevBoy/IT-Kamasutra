import React from 'react'
import {addMessageActionCreator, addFieldMessageActionCreator} from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class DialogsC extends React.Component {
  
  render() {
      return (
          <Dialogs {...this.props} />
    )
  }
}

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
  export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(DialogsC)