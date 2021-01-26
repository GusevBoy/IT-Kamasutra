import { dialog, item, icon } from './Dialog.module.css'
import { NavLink } from 'react-router-dom'
const Dialog = ({ names }) => {
    return (
        <div className={dialog}>
          {names.map(name => (
          <div className={item}>
            <img className={icon} />
            <NavLink>{name}</NavLink>
          </div>
          ))}
        </div>
    );
  }
  
  export default dialog;