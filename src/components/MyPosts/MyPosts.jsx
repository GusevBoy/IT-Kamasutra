// import { posts } from './Posts.module.css'
import Post from '../Post/Post'
const MyPosts = ({ posts }) => {
    return (
        <div>
            {posts.map(( item, index) => <Post alt={`icon-${index}. ${item}`}>{item}</Post> )}
         </div>
    );
  }
  
  export default MyPosts;