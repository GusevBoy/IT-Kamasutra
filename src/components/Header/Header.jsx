import { header, image } from './Header.module.css'
import akatsuki from './akatsuki.svg';
const Header = () => {
    return (
        <header className={header}>
          <img className={image} src={akatsuki} alt="logotip" />
        </header>
    );
  }
  
  export default Header;