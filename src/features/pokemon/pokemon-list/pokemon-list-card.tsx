import { CSSProperties } from 'react';
import { TypeIcon, IPokemon, convertId } from '@/features/pokemon';
import styles from './styles/pokemon-list-card.module.scss';
import { ImageWrapper } from '@/features/ui/image-wrapper';

interface IPokeListCard extends IPokemon {
  id: number;
  style?: CSSProperties;
}

const PokemonListCard = ({
  id,
  name,
  types,
  style,
}: IPokeListCard): JSX.Element => {
  const strId = convertId(id.toString());

  return (
    <section className={`${styles.container}`} style={style} tabIndex={0}>
      <div className={styles.leftContainer}>
        <div className={styles.headContainer}>
          <p className={`${styles.pokeId}`} aria-label={`Number ${id}`}>
            {strId}
          </p>
          <p className={`${styles.pokeName}`}>
            {name?.replace(/[a-z]/, (x) => x.toUpperCase())}
          </p>
        </div>
        <section className={`${styles.typeContainer}`}>
          {types.map((type, i: number) => (
            <TypeIcon type={type} size="small" key={i} />
          ))}
        </section>
      </div>
      <div className={styles.rightContainer}>
        <ImageWrapper
          imagePath={`/compressed-pokemon/${strId}.png`}
          imageAlt={name}
          styles={[styles.pokeImg]}
          width={160}
          height={160}
          priority
        />
      </div>
    </section>
  );
};
PokemonListCard.displayName = 'PokemonListCard';

export { PokemonListCard };
