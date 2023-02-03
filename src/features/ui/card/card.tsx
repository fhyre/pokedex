import styles from "./card.module.css";

export function Card({ name }): JSX.Element {
  return (
    <section className={`${styles.container}`}>
      <h2>{name}</h2>
    </section>
  );
}
