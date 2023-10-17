import { ButtonInterface } from "../../type";
import styles from './Button.module.css'

    // const Button = ({text, filled, type, href, icon}: ButtonInterface) => {
    //     const filledClass = filled ? styles.filled : "";
    //     return(
    //        <a href={href} className={`${styles.btn} ${styles[type]} ${filledClass}`}>
    //         <span>{text}</span>
    //         {icon}
    //         </a>
    //     )
    // }

    // export default Button;

    const Button = ({text, filled, type, href, icon}: ButtonInterface) => {
        return(
           <a href={href} className={`${styles.btn} ${styles[type]} ${filled}`}>
            <span>{text}</span>
            {icon}
            </a>
        )
    }

    export default Button;

    export function links(){
        return[{rel: 'stylesheet', href: styles}];
      }
