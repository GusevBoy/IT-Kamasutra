
import { button } from './Button.module.css'

const Button = ({ onClick, children, label }) => {
    const onClickButton = e => {
        onClick && onClick(e)
    }
    return (
        <button className={button}  aria-label={label} onClick={onClickButton}>{children}</button>
    );
  }
  
  export default Button;