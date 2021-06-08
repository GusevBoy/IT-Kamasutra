import { modalOpen, modalClose, wrapper, modalWrapper, buttons, wrapperPosts, buttonRight } from './MyPosts.module.css'
import Post from '../Post/Post'
import Button from '../Button/Button'
import Label from '../Label/Label'
import Input from '../Input/Input'
import TextArea from '../TextArea/TextArea'
import Text from '../Text/Text'
import { useState } from 'react';
const MyPosts = ({ posts, newPostTitle, newPostDescription, dispatch }) => {
    const [openForm, setOpenForm] = useState(false)
    return (
        <div className={wrapper}>
            <div className={wrapperPosts}>
                {openForm ? (
                    <div className={buttons}>
                        <Button onClick={() => setOpenForm(!openForm)}>
                            Close
                        </Button>
                        <div className={buttonRight}>
                            <Button onClick={() => {
                                    dispatch({type: 'ADD-POST'})
                                    setOpenForm(!openForm)
                                }}
                            >
                                Save
                            </Button>   
                        </div> 
                    </div>
                ) : (
                    <Button onClick={() => setOpenForm(!openForm)}>
                        Added post
                    </Button>
                )}
                {posts.map(( item, index) => <Post alt={`icon-${index}. ${item.title}`}>{item.title}</Post> )}
            </div>
            <div className={ `${openForm ? modalOpen : modalClose} ${modalWrapper}` }>
                <div>
                    <Label>
                        <Text>
                            Title
                        </Text>
                        <Input value={newPostTitle} onChange={item => dispatch({type: 'ADD-FIELD-POST', field: 'newPostTitle', newText: item})}/>
                    </Label>
                    <Label>
                        <Text>
                            Description
                        </Text>
                        <TextArea value={newPostDescription} onChange={item => dispatch({type: 'ADD-FIELD-POST', field: 'newPostDescription', newText: item})}/>
                    </Label>
                </div>
            </div>
         </div>
    );
  }
  
  export default MyPosts;