import styles from './pokemon-list-card.module.scss';
import { CSSProperties } from 'react';
import { ImageWrapper } from '@/features/ui/image-wrapper';
import { Pokemon } from '../types';
import { convertId } from '../utils';
import { TypeIcon } from '../pokemon-type-icon';
import { upperCaseFirstLetter } from '@/utils';

export function PokemonListCard({ id, name, types, style }: PokeListCard) {
  const strId = convertId(id.toString());

  return (
    <section className={`${styles.container}`} style={style} tabIndex={0}>
      <div className={styles.leftContainer}>
        <div className={styles.headContainer}>
          <p className={`${styles.pokeId}`} aria-label={`Number ${id}`}>
            {strId}
          </p>
          <p className={`${styles.pokeName}`}>{upperCaseFirstLetter(name)}</p>
        </div>
        <section className={`${styles.typeContainer}`}>
          {types.map((type, i: number) => (
            <TypeIcon type={type} size="small" key={i} />
          ))}
        </section>
      </div>
      <div className={styles.rightContainer}>
        <ImageWrapper
          imagePath={`https://poke-images.pages.dev/compressed/${strId}.png`}
          imageAlt={name}
          styles={[styles.pokeImg]}
          width={160}
          height={160}
          priority
        />
      </div>
    </section>
  );
}

type PokeListCard = Pokemon & {
  id: number;
  style?: CSSProperties;
};
