import Hamburger from "@/public/icons/hamburger";
import Pokeball from "@/public/icons/pokeball";
import { modifyQuery } from "@/store/slices/all-pokemon-slice";
import { useDispatch } from "react-redux";
import { SearchBar } from "@/features/ui";
import styles from "./header.module.scss";

export function Header(): JSX.Element {
  const dispatch = useDispatch();

  return (
    <header className={styles.container} title="Pokédex">
      <h1 className={styles.hideText} tabIndex={0}>
        Pokédex
      </h1>
      <div className={styles.drawerWrapper} aria-hidden="true">
        <Hamburger className={styles.hamburgerIcon} />
      </div>
      <Pokeball className={styles.mainIcon} />
      <div className={styles.searchBarWrapper}>
        <SearchBar
          className={styles.searchBar}
          cb={(res: string) => dispatch(modifyQuery(res))}
        />
      </div>
    </header>
  );
}
