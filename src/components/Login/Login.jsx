import { link } from './Login.module.css'
import Button from '../Button/Button'

const Login = () => {  
    return (
        <a href="https://social-network.samuraijs.com/login" className={link}>
            <Button>LOGIN</Button>
        </a>
    );
  }
  
  export default Login;