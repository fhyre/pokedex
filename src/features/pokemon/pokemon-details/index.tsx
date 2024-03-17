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
import { upperCaseFirstLetter } from '@/utils';

export function PokemonDetails({ id }) {
  const pokemon = useSelector((state: RootState) => state.pokemonData.data)[
    id - 1
  ];

  const [imageLoading, setImageLoading] = useState(true);

  //*Variables
  const strId = convertId(pokemon.id.toString());
  const type1 = getTypeColor(pokemon.types[0]);
  const type2 = getTypeColor(pokemon.types[1] && pokemon.types[1]);
  const gradientStr = `linear-gradient(180deg, ${type1}, ${type2})`;

  return (
    <>
      <Head>
        <title>{`${id} | ${upperCaseFirstLetter(pokemon.name)}`}</title>
      </Head>
      <div
        className={styles.gradientBg}
        style={{
          background: gradientStr,
        }}
      />
      <div className={styles.container}>
        <Link
          href="/"
          className={styles.returnArrow}
          style={{
            color: type1,
            mixBlendMode: 'screen',
          }}
        >
          <Icon icon="mdi:arrow-left" />
        </Link>
        <h1 className={styles.heading}>{`about ${pokemon.name}`}</h1>
        <div className={styles.pokeImgContainer}>
          <div className={styles.pokeImgWrapper}>
            <div
              style={{
                color: type1,
              }}
            >
              {pokemon.name.toUpperCase()}
            </div>
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
          <General
            pokemon={pokemon}
            gradientColor={gradientStr}
            typeColor={type1}
          />
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
