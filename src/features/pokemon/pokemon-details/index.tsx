import styles from './pokemon-details.module.scss';
import { convertId, getTypeColor } from '../utils';
import { useState } from 'react';
import {
  EvolutionsTab,
  FormsTab,
  GeneralTab,
  LocationsTab,
  MovesTab,
  StatsTab,
} from './tabs';
import ArrowLeft from '@/public/icons/arrow-left';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { ImageWrapper } from '@/features/ui/image-wrapper';

export function PokemonDetails({ id }) {
  const [selectedTab, setSelectedTab] = useState<TabNames>('general');
  const pokemon = useSelector((state: RootState) => state.allPokemon.all)[
    id - 1
  ];

  //*Variables
  const strId = convertId(pokemon.id.toString());
  const type1 = getTypeColor(pokemon.types[0]);
  const type2 = getTypeColor(pokemon.types[1] && pokemon.types[1]);
  const gradientStr = `linear-gradient(45deg, ${type1}, ${type2})`;

  const tabMapping: Map<TabNames, JSX.Element> = new Map([
    [
      'general',
      <GeneralTab
        id={id - 1}
        grdColor={gradientStr}
        typeClr={type1}
        key={'general-tab'}
      />,
    ],
    ['stats', <StatsTab key={'stats-tab'} />],
    ['moves', <MovesTab key={'moves-tab'} />],
    ['evolutions', <EvolutionsTab key={'evolutions-tab'} />],
    ['forms', <FormsTab key={'forms-tab'} />],
    ['locations', <LocationsTab key={'locations-tab'} />],
  ]);

  //*Tab Array
  const tabItems = [];
  tabs.forEach((name) =>
    tabItems.push(
      <li
        style={{
          background: name === selectedTab ? gradientStr : 'transparent',
          color: name === selectedTab ? 'white' : type1,
        }}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          setSelectedTab(target.innerText.toLowerCase() as TabNames);
        }}
        key={name}
      >
        {name.toUpperCase()}
      </li>
    )
  );

  return (
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
          mixBlendMode: 'multiply',
        }}
      >
        <ArrowLeft />
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
          <ImageWrapper
            imagePath={`https://poke-images.pages.dev/full-size/${strId}.png`}
            imageAlt={pokemon.name}
            quality={100}
            width={600}
            height={600}
            styles={[styles.pokeImg]}
            priority
          />
        </div>
      </div>
      <section className={styles.detailsContainer}>
        <div className={styles.tabsContainer}>
          <ul>{tabItems}</ul>
        </div>
        <div>{tabMapping.get(selectedTab)}</div>
      </section>
    </div>
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
