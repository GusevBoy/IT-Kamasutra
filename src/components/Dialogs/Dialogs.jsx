import { useState } from 'react';
import { dialogsWrap, wrapperCollocutors, modalOpen, modalClose, modalInner, sendField } from './Dialogs.module.css'
import Collocutors from './Collocutors/Collocutors'
import ChatCloud from '../ChatCloud/ChatCloud'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'
import {addMessageActionCreator, addFieldMessageActionCreator} from '../../Redux/dialogs-reducer'
const Dialogs = ({ dispatch, dialogs, users, newSendMessage }) => {
    const [activeId, setActiveId] = useState(null)
    const [dialog, setDialog] = useState(null)
    console.log('dialog', dialog)
    console.log('newSendMessage', newSendMessage)
    const onClickDialog = ({idSender, messages}) => {
      // console.log('user22', user)
      setActiveId(idSender)
      setDialog(messages)
    }
    return (
        <div className={dialogsWrap}>
          <div className={wrapperCollocutors}>
            <Collocutors  users={users} dialogs={dialogs} onClickLink={onClickDialog} activeId={activeId} />
          </div>
          <div className={dialog ? modalOpen : modalClose}>
            <div className={ modalInner }>
                  {dialog && dialog.map(({message, myMessage}) => {
                    return myMessage ? (
                      <>
                        <div />
                        <ChatCloud active>
                            {message}
                        </ChatCloud>
                      </>
                    ) : (
                      <>
                        <ChatCloud>
                          {message}
                        </ChatCloud>
                        <div />
                      </>
                    )
                  })}
            </div>
            <div className={sendField}>
              <TextArea value={newSendMessage}  onChange={(item) => dispatch(addFieldMessageActionCreator(item))} />
              <Button onClick={() => dispatch(addMessageActionCreator(activeId))}>
                Send
              </Button>
            </div>
          </div>
        </div>
    );
  }
  
  export default Dialogs;