import { wrapper, inner, itemWrapper, icon, item, info, name, text, paginationWrap } from './Users.module.css'
import ButtonText from '../Button/ButtonText'
import Pagination from '../Pagination/Pagination'
import Loader from '../Loader/Loader'
import { fakeIcon } from '../../img/icons'
import { NavLink } from 'react-router-dom';

const Users = ({ users, onClickFollow, totalUsersCount, pageSize, currentPage, onPageChanged, isFetching, followingProgress }) => {
  console.log('followingProgress', followingProgress)  
  return(
      <div className={wrapper}>
        <div className={inner}>
          <div className={paginationWrap}>
              <Pagination
                  totalUsersCount={totalUsersCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onClick={onPageChanged}
              />
          </div>
          
          {isFetching ? <Loader /> : (
              users.map(user => (
                  <div className={itemWrapper}>
                  <div>
                    <NavLink to={`/profile/${user.id}`}>
                      <img width="40px" height="40px" className={icon} src={user?.photos?.large || user?.photos?.small || fakeIcon} alt={user.name} />
                    </NavLink>
                  </div>
                  <div className={item}>
                      <div className={info}>
                      <span className={`${name} ${text}`}>{user.name}</span>
                      <span className={text}>{user.status}</span>
                      </div>
                      <ButtonText onClick={() => !followingProgress && onClickFollow(!user.followed, user.id)}>
                          {user.followed ? 'unfollow' : 'follow'}
                      </ButtonText>
                  </div>
                  </div>
              ))
          )}
        </div>
     </div>
    );
  }
  
  export default Users;