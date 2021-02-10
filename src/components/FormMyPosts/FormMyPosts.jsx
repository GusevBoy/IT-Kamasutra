
import { formPost } from './FormMyPosts.module.css'
import Label from '../Label/Label'
import Input from '../Input/Input'
import Text from '../Text/Text'
import { useState } from 'react'
import TextArea from '../TextArea/TextArea'

const FormMyPosts = ({ children }) => {
    const [values, setValues] = useState({title: '', description: '' })
    return (
        <div className={ formPost }>
            <Label>
                <Text>
                    Title
                </Text>
                <Input onChange={item => setValues({...values, title: item})}/>
            </Label>
            <Label>
                <Text>
                    Description
                </Text>
                <TextArea onChange={item => setValues({...values, description: item})}/>
            </Label>
        </div>
    );
  }
  
  export default FormMyPosts;