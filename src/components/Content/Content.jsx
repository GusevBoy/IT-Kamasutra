import Profile from '../Profile/Profile'
import DialogsConteiner from '../Dialogs/DialogsConteiner'
import { content } from './Content.module.css'
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <div className={content}>
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/messages" render={() => <DialogsConteiner  />} />
        </div>
    );
  }
  
  export default Content;