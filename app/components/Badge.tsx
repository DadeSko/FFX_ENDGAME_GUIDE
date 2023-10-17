import { BadgeInterface } from "../../type";
import styles from './Badge.module.css'

    // const Badge = ({text, filled}: BadgeInterface) => {
    //     const filledClass = filled ? styles.filled : "";
    //     return(
    //         <small className={`${styles.badge} ${filledClass}`}>{text}</small>
    //     )
    // }

    // export default Badge;

    const Badge = ({text, filled}: BadgeInterface) => {
        return(
            <small className={`${styles.badge} ${filled}`}>{text}</small>
        )
    }

    export default Badge;

    export function links(){
        return[{rel: 'stylesheet', href: styles}];
      }
