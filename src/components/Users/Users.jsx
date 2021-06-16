import { wrapper, inner, itemWrapper, icon, item, info, name} from './Users.module.css'
import ButtonText from '../Button/ButtonText'

const Users = ({ users, followUser, unfollowUser }) => {
    
    return (
        <div className={wrapper}>
          <div className={inner}>
            {users.sort((a, b) => b.follow - a.follow).map(user => (
              <div className={itemWrapper}>
                <img width="40px" height="40px" className={icon} src={user.img} alt={user.login} />
                <div className={item}>
                  <div className={info}>
                    <span className={name}>{user.login}</span>
                    <span>{user.status}</span>
                  </div>
                  <ButtonText onClick={() => user.follow ? unfollowUser(user.id) : followUser(user.id)}>
                      {user.follow ? 'unfollow' : 'follow'}
                  </ButtonText>
                </div>
              </div>
            ))}
          </div>
         </div>
    );
  }
  
  export default Users;