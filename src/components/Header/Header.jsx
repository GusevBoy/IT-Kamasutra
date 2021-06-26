import { header, image, text, name, texts } from './Header.module.css'
import akatsuki from './akatsuki.svg';
const Header = ({login, email}) => {
    return (
        <header className={header}>
          <img className={image} src={akatsuki} alt="logotip" />
          <div className={texts}>
            <span className={`${text} ${name}`}>{login}</span>
            <span className={text}>{email}</span>
          </div>
        </header>
    );
  }
  
  export default Header;