import { profile } from './Profile.module.css'
import MyPosts from '../MyPosts/MyPosts'
const Profile = ({ myPosts, addPost, addFieldPost }) => {
    return (
        <div className={profile}>
            <MyPosts
                posts={myPosts.posts}
                addPost={addPost}
                newPostTitle={myPosts.newPostTitle}
                newPostDescription={myPosts.newPostDescription}
                addFieldPost={addFieldPost}
            />
         </div>
    );
  }
  
  export default Profile;