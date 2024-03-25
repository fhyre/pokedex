import styles from './pokemon-list.module.scss';
import { VirtualScroll } from '@/features/ui';
import { RootState } from '@/store/index';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { NotFound } from '@/features/ui';
import { PokemonListCard } from '../pokemon-list-card';
import { useScrollRestore } from '@/features/ui/virtual-scroll/use-scroll-restore';
import { useSearchParams } from 'next/navigation';

export function PokemonList() {
  const { data } = useSelector((state: RootState) => state.pokemonData);

  const params = useSearchParams();
  const searchQuery = params.get('query') || '';
  const generations = JSON.parse(params.get('generations')) || [];

  const [prevScrollPos] = useScrollRestore();

  const handlePokemonClick = () => {
    const virtualScrollContainer = document.getElementById('virtual-scroll');

    sessionStorage.setItem(
      'scrollPos',
      virtualScrollContainer.scrollTop.toString()
    );
  };

  const filtered = data
    .filter(({ gen }) => {
      if (generations.length === 0) return true;
      return generations.includes(gen);
    })
    .filter(({ id, name }) => {
      if (searchQuery.length === 0) return true;
      return (
        id.toString().includes(searchQuery) ||
        name.includes(searchQuery.toLowerCase())
      );
    })
    .map((poke) => {
      return (
        <Link
          href={`/pokemon/${poke.id}`}
          style={{ textDecoration: 'none' }}
          key={poke.id + ' ' + poke.name}
          onClick={handlePokemonClick}
          tabIndex={-1}
        >
          <PokemonListCard {...poke} />
        </Link>
      );
    });

  return (
    <VirtualScroll
      className={styles.container}
      data={filtered}
      offset={48}
      FallbackComp={NotFound}
      prevScrollPos={prevScrollPos}
    />
  );
}
