import { addMessageActionCreator, addFieldMessageActionCreator } from '../../Redux/dialogs-reducer';

import MyPosts from "./MyPosts";
import StoreContext from '../../StoreContext';

const MyPostsConteiner = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const { myPosts: {posts, newPostTitle, newPostDescription} } = store.getState()
                    const { dispatch } = store
                    return (
                        <MyPosts
                            updateNewPostText={(item, field) => dispatch(addFieldPostActionCreator(field, item))}
                            addPost={() => dispatch(addPostActionCreator())}
                            posts={posts}
                            newPostTitle={newPostTitle}
                            newPostDescription={newPostDescription}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsConteiner 