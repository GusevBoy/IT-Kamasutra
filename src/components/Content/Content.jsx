import Profile from '../Profile/Profile'
import MyPostsConteiner from '../MyPosts/MyPostsConteiner'
import DialogsConteiner from '../Dialogs/DialogsConteiner'
import UsersConteiner from '../Users/UsersConteiner'
import { content } from './Content.module.css'
import { Route } from 'react-router-dom';

const Content = () => {
    return (
        <div className={content}>
          <Route path="/posts" render={() => <MyPostsConteiner />} />
          <Route path="/messages" render={() => <DialogsConteiner  />} />
          <Route path="/users" render={() => <UsersConteiner  />} />
        </div>
    );
  }
  
  export default Content;