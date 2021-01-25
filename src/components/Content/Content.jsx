import { content } from './Content.module.css'
import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'
import { Route } from 'react-router-dom';
const Content = () => {
    return (
        <div className={content}>
          <Route path="/profile" component={Profile} />
          <Route path="/messages" component={Dialogs} />
        </div>
    );
  }
  
  export default Content;