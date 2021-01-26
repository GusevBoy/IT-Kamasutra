import { dialogs } from './Dialogs.module.css'
import Collocutors from './Collocutors/Collocutors'
const Dialogs = ({ users }) => {
    return (
        <div className={dialogs}>
          <Collocutors users={users} />
        </div>
    );
  }
  
  export default Dialogs;