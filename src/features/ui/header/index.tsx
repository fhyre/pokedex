import styles from './header.module.scss';
import { ImageWrapper } from '../image-wrapper';
import { useState } from 'react';
import { PokemonFilterModal } from '@/features/pokemon/pokemon-filter-modal';
import { Icon } from '@iconify/react';
import { useSearchParams } from 'next/navigation';

export function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const searchParams = useSearchParams();

  return (
    <>
      <header className={styles.container} title="Pokédex">
        <h1 className={styles.hideText} tabIndex={0}>
          Pokédex
        </h1>
        <ImageWrapper
          imagePath="/icons/pokeball.svg"
          imageAlt="Pokeball"
          styles={[styles.mainIcon]}
        />
        <div className={styles.filterIconContainer}>
          <button onClick={() => setModalVisible(true)} about="Open Filters">
            {searchParams.size > 0 && <div className={styles.dotIcon} />}
            <Icon icon="iconoir:filter-solid" />
          </button>
        </div>
      </header>
      {modalVisible && <PokemonFilterModal setModalVisible={setModalVisible} />}
    </>
  );
}
