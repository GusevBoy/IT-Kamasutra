import { post, icon } from './Post.module.css'
const Post = ({ src, alt, children }) => (
<div className={post}>
    <img className={icon} src={src} alt={alt}/>
    <p>{children}</p>
</div>
)
  
  export default Post;