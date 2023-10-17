import { CardInterface } from "../../type";
import Badge from "./Badge";
import Button from "./Button";
import styles from './HomeCard.module.css'


export const HomeCard = ({body,btn,title,badge,image,indicator,subtitle}:CardInterface) => {
  return (
    <article className= {styles.card}>
        {image && 
        <img src={image} alt="Random Image" className={styles.image} />
        }
        <div className="stack-lg">
            <h3 className={styles.title}>{title}</h3>
            {subtitle && 
            <small className={styles.subtitle}>{subtitle}</small>}
        </div>
        <p className={styles.body}>{body}</p>
        <Button 
        filled={btn.filled}
        type={btn.type}
        text={btn.text}
        href={btn.href}
        icon={btn.icon}
        />
    </article>
  )
}

export function links(){
  return[{rel: 'stylesheet', href: styles}];
}