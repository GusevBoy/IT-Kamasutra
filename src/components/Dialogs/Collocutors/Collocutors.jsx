import { collocutors, item, icon, active, iconActive } from './Collocutors.module.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Collocutors = ({ users }) => {
  const [activeId, setActiveId] = useState()
    return (
        <div className={collocutors}>
          {users.map(user => (
            <div className={item} key={`${user.id}${user.login}`}>
              <img width="35px" height="35px" className={`${icon} ${activeId === user.id && iconActive}`} src={user.img} alt={user.login} />
              <NavLink onClick={() => setActiveId(user.id)}to={`/messages/${user.id}`} activeClassName={active}>{user.login}</NavLink>
          </div>
          ))}
        </div>
    );
  }
  
  export default Collocutors;