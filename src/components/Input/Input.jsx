import { input, inputSmall } from './Input.module.css'

const Input = ({ onChange, placeholder, value, defaultValue, type = 'default', autoFocus, onBlur }) => {  
    const onChangeInput = e => {
        const newValue = e.currentTarget.value
        onChange && onChange(newValue)
    }
    const types = {
        'default': input,
        'small': inputSmall,
    }
    return (
        <input
            className={types[type]}
            placeholder={placeholder}
            onChange={onChangeInput}
            autoFocus={autoFocus}
            value={value}
            defaultValue={defaultValue}
            onBlur={onBlur}
        />
    );
  }
  
  export default Input;