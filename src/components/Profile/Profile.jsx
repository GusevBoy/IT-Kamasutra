import { profile, post } from './Profile.module.css'
import MyPosts from '../MyPosts/MyPosts'
const Profile = () => {
    return (
        <div className={profile}>
            <MyPosts posts={[
                {
                    src: 'https://sketchok.com/images/articles/06-anime/023-naruto/17/11.jpg',
                    text: 'Itachi',
                },
                {
                    src: 'https://www.pngitem.com/pimgs/m/533-5331003_render-naruto-pain-naruto-pain-face-png-transparent.png',
                    text: 'Pain',
                },
                {
                    src: 'https://i.pinimg.com/originals/d8/47/fd/d847fd7264cf58b2dcce68fb207ddd30.jpg',
                    text: 'Conan',
                },
                {
                    src: 'https://cdn141.picsart.com/320176969123201.jpg?type=webp&to=min&r=640',
                    text: 'Deidara',
                },
                {
                    src: 'https://i.pinimg.com/originals/49/79/34/497934ae5effa963835929a842a2c792.jpg',
                    text: 'Hidan',
                },
                {
                    src: 'https://alchetron.com/cdn/orochimaru-naruto-ea5b7b10-ecd0-45a2-b72d-86ee480ca76-resize-750.jpg',
                    text: 'Orachimaru',
                },
            ]}/>
         </div>
    );
  }
  
  export default Profile;