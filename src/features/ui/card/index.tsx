import styles from './card.module.css';

export function Card({ name }) {
  return (
    <section className={`${styles.container}`}>
      <h2>{name}</h2>
    </section>
  );
}
