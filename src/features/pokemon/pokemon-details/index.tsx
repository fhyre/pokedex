import styles from './pokemon-details.module.scss';
import { convertId, getTypeColor, darkenColor } from '../utils';
import { useEffect, useState } from 'react';
import { ImageWrapper } from '@/features/ui/image-wrapper';
import { Navbar } from '@/features/ui';
import { Home, ArrowLeft, ArrowRight, LoaderCircle } from 'lucide-react';
import Head from 'next/head';
import { General, Stats } from './components';
import { upperCaseFirstLetter } from '@/utils';
import { useRouter } from 'next/router';
import { EPokeTypeColors } from '../enums';
import { allPokemon } from '../data';

export function PokemonDetails({ id }: PokemonDetailsProps) {
  const router = useRouter();
  const pokemon = allPokemon[id - 1];

  const strId = convertId(pokemon.id.toString());
  const type1Color = getTypeColor(pokemon.types[0]);
  const type2Color = getTypeColor(pokemon.types[1] && pokemon.types[1]);
  const gradientStr = `linear-gradient(90deg, ${type1Color}, ${type2Color})`;
  const electricIndex = [type1Color, type2Color].indexOf(
    EPokeTypeColors.ELECTRIC
  );
  const readableColor = darkenColor(
    electricIndex === -1 || electricIndex === 1 ? type1Color : type2Color,
    -10
  );

  const [imageLoading, setImageLoading] = useState(true);

  const handleHome = () => {
    router.push('/');
  };

  const handlePrev = () => {
    const prevId = id - 1;
    if (prevId >= 1) {
      router.replace(`/pokemon/${prevId}`);
    }
  };

  const handleNext = () => {
    const nextId = id + 1;
    if (nextId <= allPokemon.length) {
      router.replace(`/pokemon/${nextId}`);
    }
  };

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
  }, [imageLoading, readableColor]);

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
        <Navbar
          left={
            <button
              onClick={handlePrev}
              disabled={id === 1}
              style={{
                color: readableColor,
                opacity: id === 1 ? 0.5 : 1,
              }}
              title="Previous Pokemon"
            >
              <ArrowLeft />
            </button>
          }
          middle={
            <h1
              style={{
                color: readableColor,
              }}
            >
              {strId}
            </h1>
          }
          right={
            <button
              onClick={handleNext}
              disabled={id === allPokemon.length}
              style={{
                color: readableColor,
                opacity: id === allPokemon.length ? 0.5 : 1,
              }}
              title="Next Pokemon"
            >
              <ArrowRight />
            </button>
          }
        />
        {imageLoading ? (
          <div className={styles.loadingContainer}>
            <LoaderCircle
              className="animate-spin"
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
            <div className={styles.innerContentContainer}>
              <div className={styles.pokeImgContainer}>
                <ImageWrapper
                  imagePath={`https://poke-images.pages.dev/full-size/${strId}.png`}
                  imageAlt={pokemon.name}
                  quality={100}
                  styles={[styles.pokeImg]}
                  priority
                />
                <div
                  className={styles.pokemonName}
                  style={{
                    color: type1Color,
                  }}
                >
                  {pokemon.name.toUpperCase()}
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
          </div>
        )}
      </div>
    </>
  );
}

type PokemonDetailsProps = {
  id: number;
};
