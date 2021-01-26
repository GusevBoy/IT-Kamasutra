import { content } from './Content.module.css'
import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'
import { Route } from 'react-router-dom';

const Content = ({ state }) => {
    return (
        <div className={content}>
          <Route path="/profile" render={() => <Profile posts={state.posts}/>} />
          <Route path="/messages" render={() => <Dialogs users={state.users} />} />
        </div>
    );
  }
  
  export default Content;