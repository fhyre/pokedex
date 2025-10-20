import styles from './header.module.scss';
import { ImageWrapper } from '../image-wrapper';
import { SearchBar } from '../search-bar';
import { useState, useCallback } from 'react';
import { PokemonFilterModal } from '@/features/pokemon/pokemon-filter-modal';
import { Icon } from '@iconify/react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearchChange = useCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    router.push(`?${params.toString()}`);
  }, [searchParams, router]);

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
        <SearchBar
          currentValue={searchParams.get('query') || ''}
            cb={handleSearchChange}
          />
          <button onClick={() => setModalVisible(true)} title="Open Filters">
            {Array.from(searchParams.keys()).some(key => key !== 'query') && <div className={styles.dotIcon} />}
            <Icon icon="iconoir:filter-solid" />
          </button>
        </div>
      </header>
      {modalVisible && <PokemonFilterModal setModalVisible={setModalVisible} />}
    </>
  );
}
