import Image from "next/image";
import { CSSProperties } from "react";
import { TypeIcon, IPokemon, convertId } from "@/features/pokemon";
import styles from "./styles/pokemon-list-card.module.scss";

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
        <Image
          unoptimized
          src={`/compressed-pokemon/${strId}.png`}
          alt=""
          width={160}
          height={160}
          quality={100}
          className={`${styles.pokeImg}`}
        />
      </div>
    </section>
  );
};
PokemonListCard.displayName = "PokemonListCard";

export { PokemonListCard };
