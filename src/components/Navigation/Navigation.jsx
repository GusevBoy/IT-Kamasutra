
import { navigation, item, item_last, active } from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={navigation}>
            <div className={item}>
                <NavLink to="/posts" activeClassName={active}>Posts</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/messages" activeClassName={active}>Messages</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/users" activeClassName={active}>Users</NavLink>
            </div>
            {/* <div className={item}>
                <NavLink to="/music" activeClassName={active}>Music</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/news" activeClassName={active}>News</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/articles" activeClassName={active}>Articles</NavLink>
            </div>
            <div className={item}>
                <NavLink to="/contacts" activeClassName={active}>Contacts</NavLink>
            </div>
            <div className={`${item} ${item_last}`}>
                <NavLink to="/settings" activeClassName={active}>Settings</NavLink>
            </div> */}
        </nav>
    );
  }
  
  export default Navigation;