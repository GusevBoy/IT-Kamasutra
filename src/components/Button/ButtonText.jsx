
import { buttonText } from './Button.module.css'

const ButtonText = ({ onClick, children, label }) => {
    const onClickButton = e => {
        onClick && onClick(e)
    }
    return (
        <button className={buttonText}  aria-label={label} onClick={onClickButton}>{children}</button>
    );
  }
  
  export default ButtonText;