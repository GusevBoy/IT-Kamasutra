import { post, icon } from './Post.module.css'
import akatsuki from './akatsuki.svg'
const Post = ({ src, alt, children }) => (
<div className={post}>
    <img className={icon} src={akatsuki} alt={alt}/>
    <p>{children}</p>
</div>
)
  
  export default Post;