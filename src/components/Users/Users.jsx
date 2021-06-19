import { wrapper, inner, itemWrapper, icon, item, info, name, text, paginationWrap } from './Users.module.css'
import ButtonText from '../Button/ButtonText'
import Pagination from '../Pagination/Pagination'
import Loader from '../Loader/Loader'

const Users = ({ users, followUser, unfollowUser, totalUsersCount, pageSize, currentPage, onPageChanged, isFetching }) => {
  const fakeIcon = 'https://www.kindpng.com/picc/m/67-676296_straw-hat-luffy-clipart-one-piece-icon-png.png'
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
                  <img width="40px" height="40px" className={icon} src={fakeIcon} alt={user.name} />
                  <div className={item}>
                      <div className={info}>
                      <span className={`${name} ${text}`}>{user.name}</span>
                      <span className={text}>{user.status}</span>
                      </div>
                      <ButtonText onClick={() => user.followed ? unfollowUser(user.id) : followUser(user.id)}>
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