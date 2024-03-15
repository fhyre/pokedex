import styles from './pokemon-details.module.scss';
import { convertId, getTypeColor } from '../utils';
import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { ImageWrapper } from '@/features/ui/image-wrapper';
import { Icon } from '@iconify/react';
import Head from 'next/head';
import { General } from './components';

export function PokemonDetails({ id }) {
  const pokemon = useSelector((state: RootState) => state.allPokemon.data)[
    id - 1
  ];
  const [imageLoading, setImageLoading] = useState(true);

  //*Variables
  const strId = convertId(pokemon.id.toString());
  const type1 = getTypeColor(pokemon.types[0]);
  const type2 = getTypeColor(pokemon.types[1] && pokemon.types[1]);
  const gradientStr = `linear-gradient(45deg, ${type1}, ${type2})`;

  return (
    <>
      <Head>
        <title>{`${id} | ${pokemon.name.replace(/[a-z]/, (l) =>
          l.toUpperCase()
        )}`}</title>
      </Head>
      <div
        className={styles.container}
        style={{
          background: gradientStr,
        }}
      >
        <Link
          href="/"
          className={styles.returnArrow}
          style={{
            color: type1,
            mixBlendMode: 'color-dodge',
          }}
        >
          <Icon icon="tabler:arrow-back-up" />
        </Link>
        <h1 className={styles.heading}>{`about ${pokemon.name}`}</h1>
        <div className={styles.pokeImgContainer}>
          <div
            style={{
              color: type1,
            }}
          >
            {pokemon.name.toUpperCase()}
          </div>
          <div className={styles.pokeImgWrapper}>
            {imageLoading && (
              <Icon
                icon="line-md:loading-loop"
                style={{
                  width: 50,
                  height: 50,
                  color: type1,
                  mixBlendMode: 'color-dodge',
                }}
              />
            )}
            <ImageWrapper
              imagePath={`https://poke-images.pages.dev/full-size/${strId}.png`}
              imageAlt={pokemon.name}
              quality={100}
              width={600}
              height={600}
              styles={[styles.pokeImg]}
              onLoaded={() => setImageLoading(false)}
              loading={imageLoading}
              priority
            />
          </div>
        </div>
        <section className={styles.detailsContainer}>
          <General id={id - 1} gradientColor={gradientStr} typeColor={type1} />
        </section>
      </div>
    </>
  );
}

type TabNames =
  | 'general'
  | 'stats'
  | 'moves'
  | 'evolutions'
  | 'forms'
  | 'locations';

const tabs: TabNames[] = [
  'general',
  'stats',
  'moves',
  'evolutions',
  'forms',
  'locations',
];
