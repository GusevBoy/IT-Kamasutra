import { useState } from 'react'
import { input } from './Input.module.css'

const Input = ({ onChange, placeholder, value }) => {  
    const onChangeInput = e => {
        const newValue = e.currentTarget.value
        onChange && onChange(newValue)
    }
    return (
        <input
            className={input}
            placeholder={placeholder}
            onChange={onChangeInput}
            value={value}
        />
    );
  }
  
  export default Input;