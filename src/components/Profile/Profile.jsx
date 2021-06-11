import { profile } from './Profile.module.css'
import MyPostsConteiner from '../MyPosts/MyPostsConteiner'
const Profile = () => {
    return (
        <div className={profile}>
            <MyPostsConteiner />
         </div>
    );
  }
  
  export default Profile;