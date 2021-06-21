import { networksWrap, itemWrapper, item, name, text, icon, info } from './Profile.module.css'
import MyPostsConteiner from '../MyPosts/MyPostsConteiner'
import Networks from '../Networks/Networks'
import ButtonText from '../Button/ButtonText'
import { fakeIcon } from '../../img/icons'

const Profile = ({ profile }) => {
    return (
        <div>
            <div className={itemWrapper}>
                <img width="40px" height="40px" className={icon} src={profile?.photos?.large || profile?.photos?.small || fakeIcon} alt={profile.fullName} />
                <div className={item}>
                    <div className={info}>
                        <span className={`${text} ${name}`}>{profile.fullName}</span>
                        <span className={text}>{profile.aboutMe}</span>
                        <span className={text}>{profile.lookingForAJobDescription}</span>
                        <div className={networksWrap}>
                            <Networks links={profile.contacts} />
                        </div>
                    </div>
                </div>
            </div>
            
         </div>
    );
  }
  
  export default Profile;