import {  wrapper, activeWrapper  } from './ChatCloud.module.css'
const ChatCloud = ({ children, active }) => (
        <div className={`${active && activeWrapper} ${wrapper} `}>
            {children}
        </div>
    );
  
  export default ChatCloud;