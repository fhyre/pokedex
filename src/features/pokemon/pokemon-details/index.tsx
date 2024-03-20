import styles from './pokemon-details.module.scss';
import { convertId, electric, getTypeColor } from '../utils';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { ImageWrapper } from '@/features/ui/image-wrapper';
import { Icon } from '@iconify/react';
import Head from 'next/head';
import { General, Stats } from './components';
import { upperCaseFirstLetter } from '@/utils';

export function PokemonDetails({ id }) {
  const pokemon = useSelector((state: RootState) => state.pokemonData.data)[
    id - 1
  ];

  const strId = convertId(pokemon.id.toString());
  const type1Color = getTypeColor(pokemon.types[0]);
  const type2Color = getTypeColor(pokemon.types[1] && pokemon.types[1]);
  const gradientStr = `linear-gradient(90deg, ${type1Color}, ${type2Color})`;
  const electricIndex = [type1Color, type2Color].indexOf(electric);
  const readableColor =
    electricIndex === -1 || electricIndex === 1 ? type1Color : type2Color;

  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    if (!imageLoading) {
      document
        .querySelectorAll(`.${styles.detailsContainer} > section`)
        .forEach((el) => {
          (
            el as HTMLElement
          ).style.boxShadow = `${readableColor} 0px 0px 5px 0px`;
        });
    }
  }, [imageLoading]);

  return (
    <>
      <Head>
        <title>{`${id} | ${upperCaseFirstLetter(pokemon.name)}`}</title>
      </Head>
      <div className={styles.container}>
        <div
          className={styles.gradientBg}
          style={{
            background: gradientStr,
          }}
        />
        <nav className={styles.returnArrowContainer}>
          <Link
            href="/"
            style={{
              color: readableColor,
              mixBlendMode: 'color-burn',
            }}
            about="Return to home page"
          >
            <Icon icon="mdi:arrow-left" />
          </Link>
        </nav>
        {imageLoading ? (
          <div className={styles.loadingContainer}>
            <Icon
              icon="line-md:loading-loop"
              style={{
                color: readableColor,
              }}
            />
            <ImageWrapper
              imagePath={`https://poke-images.pages.dev/full-size/${strId}.png`}
              imageAlt={pokemon.name}
              quality={0}
              onLoaded={() => setImageLoading(false)}
              loading={imageLoading}
              priority
            />
          </div>
        ) : (
          <div className={styles.contentContainer}>
            <h1 className={styles.heading}>{`about ${pokemon.name}`}</h1>
            <div className={styles.pokeImgContainer}>
              <div className={styles.pokeImgWrapper}>
                <div
                  style={{
                    color: type1Color,
                  }}
                >
                  {pokemon.name.toUpperCase()}
                </div>
                {imageLoading && (
                  <Icon
                    icon="line-md:loading-loop"
                    style={{
                      width: '50px',
                      height: '50px',
                      color: type1Color,
                      mixBlendMode: 'color-dodge',
                    }}
                  />
                )}
                <ImageWrapper
                  imagePath={`https://poke-images.pages.dev/full-size/${strId}.png`}
                  imageAlt={pokemon.name}
                  quality={100}
                  styles={[styles.pokeImg]}
                  onLoaded={() => setImageLoading(false)}
                  loading={imageLoading}
                  priority
                />
              </div>
            </div>
            <div className={styles.detailsContainer}>
              <General
                pokemon={pokemon}
                gradientColor={gradientStr}
                typeColor={readableColor}
              />
              <Stats pokemon={pokemon} typeColor={readableColor} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
