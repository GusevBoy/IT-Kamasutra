import Profile from '../Profile/Profile'
import MyPostsConteiner from '../MyPosts/MyPostsConteiner'
import DialogsConteiner from '../Dialogs/DialogsConteiner'
import UsersConteiner from '../Users/UsersConteiner'
import ProfileConteiner from '../Profile/ProfileConteiner'
import Login from '../Login/Login'
import { content } from './Content.module.css'
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <div className={content}>
          <Route path="/posts" render={() => <MyPostsConteiner />} />
          <Route path="/messages" render={() => <DialogsConteiner  />} />
          <Route path="/users" render={() => <UsersConteiner  />} />
          <Route path="/profile/:profileId" render={() => <ProfileConteiner  />} />
          <Route path="/login" render={() => <Login  />} />
        </div>
    );
  }
  
  export default Content;