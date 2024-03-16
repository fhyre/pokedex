import styles from './header.module.scss';
import { modifyQuery } from '@/store/slices/pokemon-data-slice';
import { useDispatch } from 'react-redux';
import { SearchBar } from '@/features/ui';
import { Icon } from '@iconify/react';
import { ImageWrapper } from '../image-wrapper';

export function Header() {
  const dispatch = useDispatch();

  return (
    <header className={styles.container} title="Pokédex">
      <h1 className={styles.hideText} tabIndex={0}>
        Pokédex
      </h1>
      <div className={styles.drawerWrapper} aria-hidden="true">
        <Icon icon="mdi:hamburger-menu" className={styles.hamburgerIcon} />
      </div>
      <ImageWrapper
        imagePath="/icons/pokeball.svg"
        imageAlt="Pokeball"
        styles={[styles.mainIcon]}
      />
      <div className={styles.searchBarWrapper}>
        <SearchBar
          className={styles.searchBar}
          cb={(res: string) => dispatch(modifyQuery(res))}
        />
      </div>
    </header>
  );
}
