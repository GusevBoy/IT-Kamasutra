import facebook from '../../img/facebook.svg';
import github from '../../img/github.svg';
import instagram from '../../img/instagram.svg';
import twitter from '../../img/twitter.svg';
import vk from '../../img/vk.svg';
import youtube from '../../img/youtube.svg';

import { image, imageLast, wrapper } from './Networks.module.css';
const Networks = ({ links = {}, profileName }) => {
    const icons = {
        facebook,
        github,
        instagram,
        twitter,
        vk,
        youtube,
    }
    return (
        <div className={wrapper}>
            {Object.keys(links).map((name, i) => (
                icons?.[name] && links?.[name] &&  (
                    <a href={`https://${links[name].replace('https://', '') || ''}`} alt={`link to ${name || ''} for user ${profileName || ''}`} target='blank'>
                        <img src={icons[name]} className={`${image} ${ i === 0 && imageLast}`} />
                    </a>
                )
            ))}
        </div>
    )
}
 
export default Networks;