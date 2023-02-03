import styles from "./footer.module.css";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <h2 tabIndex={0}>Pokédex</h2>
      <p>
        <em>
          I do not own any of the assets. All assets belong to their respective
          owners.
        </em>
      </p>
    </footer>
  );
}
