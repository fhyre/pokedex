import styles from './navbar.module.scss';

interface NavbarProps {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
}

export function Navbar({ left, middle, right }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>{left}</div>
      <div className={styles.middle}>{middle}</div>
      <div className={styles.right}>{right}</div>
    </nav>
  );
}
