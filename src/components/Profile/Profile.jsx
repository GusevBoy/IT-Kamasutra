import { profile } from './Profile.module.css'
import MyPosts from '../MyPosts/MyPosts'
const Profile = ({ myPosts, dispatch }) => {
    return (
        <div className={profile}>
            <MyPosts
                posts={myPosts.posts}
                newPostTitle={myPosts.newPostTitle}
                newPostDescription={myPosts.newPostDescription}
                dispatch={dispatch}
            />
         </div>
    );
  }
  
  export default Profile;