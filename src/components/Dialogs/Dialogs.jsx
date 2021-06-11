import { useState } from 'react';
import { dialogsWrap, wrapperCollocutors, modalOpen, modalClose, modalInner, sendField } from './Dialogs.module.css'
import Collocutors from './Collocutors/Collocutors'
import ChatCloud from '../ChatCloud/ChatCloud'
import TextArea from '../TextArea/TextArea'
import Button from '../Button/Button'
const Dialogs = ({ dialogs, users, newSendMessage, addMessage, updateNewMessage }) => {
    const [activeId, setActiveId] = useState(null)
    const [dialog, setDialog] = useState(null)
    const onClickDialog = ({idSender, messages}) => {
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
              <TextArea value={newSendMessage}  onChange={item => updateNewMessage(item)} />
              <Button onClick={() => addMessage(activeId)}>
                Send
              </Button>
            </div>
          </div>
        </div>
    );
  }
  
  export default Dialogs;