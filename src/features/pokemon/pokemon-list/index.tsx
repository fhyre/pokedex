import styles from './pokemon-list.module.scss';
import { VirtualScroll } from '@/features/ui';
import { RootState } from '@/store/index';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { NotFound } from '@/features/ui';
import { PokemonListCard } from '../pokemon-list-card';

export function PokemonList() {
  const searchQ = useSelector((state: RootState) => state.allPokemon.query);
  const allPokemon = useSelector((state: RootState) => state.allPokemon.all);

  const filtered = allPokemon
    .filter(
      (poke) =>
        poke.name.includes(searchQ.toLowerCase()) ||
        poke.id.toString().includes(searchQ)
    )
    .map((poke) => {
      return (
        <Link
          href={`/pokemon/${poke.id}`}
          style={{ textDecoration: 'none' }}
          key={poke.id + ' ' + poke.name}
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
    />
  );
}
