import { profile, post } from './Profile.module.css'
import MyPosts from '../MyPosts/MyPosts'
const Profile = ({ posts }) => {
    return (
        <div className={profile}>
            <MyPosts posts={posts.map(item => item.title)}/>
         </div>
    );
  }
  
  export default Profile;