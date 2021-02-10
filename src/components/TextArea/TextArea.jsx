import { textarea } from './TextArea.module.css'

const TextArea = ({ onChange, placeholder, value }) => {  
    const onChangeTextarea = e => {
        const newValue = e.currentTarget.value
        onChange && onChange(newValue)
    }
    return (
        <textarea
            className={textarea}
            placeholder={placeholder}
            onChange={onChangeTextarea}
            value={value}
        />
    );
  }
  
  export default TextArea;