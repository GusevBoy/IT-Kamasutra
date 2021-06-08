import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'
import { content } from './Content.module.css'
import { Route } from 'react-router-dom';

const Content = ({ state, dispatch }) => {
    return (
        <div className={content}>
          <Route path="/profile" render={() => <Profile myPosts={state.myPosts} dispatch={dispatch} />} />
          <Route path="/messages" render={() => <Dialogs users={state.users} />} />
        </div>
    );
  }
  
  export default Content;