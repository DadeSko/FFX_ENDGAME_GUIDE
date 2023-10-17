import { CardInterface } from "../../type";
import Badge from "./Badge";
import Button from "./Button";
import styles from "./Card.module.css";


export const Card = ({
  body,
  btn,
  title,
  badge,
  image,
  indicator,
  subtitle,
}: CardInterface) => {
  return (
    <article className={styles.card}>
      {indicator && <small className={styles.indicator}>{indicator}</small>}
      {image && <img src={image} alt="Random Image" className={styles.image} />}
      <div className="stack-sm">
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <small className={styles.subtitle}>{subtitle}</small>}
      </div>
      <p className={styles.body}>{body}</p>
    </article>
  );
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
