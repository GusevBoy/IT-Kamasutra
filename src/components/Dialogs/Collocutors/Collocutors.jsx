import { collocutors, item, icon, activeLink, iconActive } from './Collocutors.module.css'
import { NavLink } from 'react-router-dom';
import store from '../../../Redux/store'

const Collocutors = ({ dialogs, onClickLink, activeId }) => {
    return (
        <div className={collocutors}>
          {dialogs.map(dialog => { 
            const user = store._state.users.find(({id}) => dialog.idSender === id)
            return (
              <div className={item} key={dialog.id}>
                <img width="35px" height="35psx" className={`${icon} ${activeId === user.id && iconActive}`} src={user.img} alt={user.login} />
                <NavLink onClick={() => onClickLink(dialog)}to={`/messages/${user.id}`} className={activeId === user.id && activeLink}>{user.login}</NavLink>
              </div>
            )
          })}
        </div>
    );
  }
  
  export default Collocutors;