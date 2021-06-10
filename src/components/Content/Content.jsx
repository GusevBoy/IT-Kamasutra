import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'
import { content } from './Content.module.css'
import { Route } from 'react-router-dom';

const Content = ({ state, dispatch }) => {
    return (
        <div className={content}>
          <Route path="/profile" render={() => <Profile myPosts={state.myPosts} dispatch={dispatch} />} />
          <Route path="/messages" render={() => <Dialogs dispatch={dispatch} dialogs={state.myDialogs.dialogs} users={state.users} newSendMessage={state.myDialogs.newSendMessage} />} />
        </div>
    );
  }
  
  export default Content;