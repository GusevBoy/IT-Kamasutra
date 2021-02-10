
import { label } from './Label.module.css'

const Label = ({ children }) => {
    return (
        <label className={label}>
            {children}
        </label>
    );
  }
  
  export default Label;