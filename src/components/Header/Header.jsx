import { header, image } from './Header.module.css'
import logo from './logo.svg';
const Header = () => {
    return (
        <header className={header}>
          <img className={image} src={logo} alt="logotip" />
        </header>
    );
  }
  
  export default Header;