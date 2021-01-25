// import { posts } from './Posts.module.css'
import Post from '../Post/Post'
const MyPosts = ({ posts }) => {
    return (
        <div>
            {posts.map(({ src, text }, index) => <Post src={src} alt={`icon-${index}. ${text}`}>{text}</Post> )}
         </div>
    );
  }
  
  export default MyPosts;