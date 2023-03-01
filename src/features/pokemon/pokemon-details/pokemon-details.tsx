import styles from "./pokemon-details.module.scss";
import Image from "next/image";
import { convertId } from "../utils";
import { alexandria } from "@/assets/fonts";
import { useState } from "react";
import { getTypeColor, Pokemon, allPokemon } from "@/features/pokemon";
import {
  EvolutionsTab,
  FormsTab,
  GeneralTab,
  LocationsTab,
  MovesTab,
  StatsTab,
} from "./tabs";
import ArrowLeft from "@/public/icons/arrow-left";
import Link from "next/link";

type TabNames =
  | "general"
  | "stats"
  | "moves"
  | "evolutions"
  | "forms"
  | "locations";

const tabs: TabNames[] = [
  "general",
  "stats",
  "moves",
  "evolutions",
  "forms",
  "locations",
];

interface Details {
  data: Pokemon;
}

export function PokemonDetails({ data }: Details): JSX.Element {
  const [selectedTab, setSelectedTab] = useState<TabNames>("general");

  //*Variables
  const strId = convertId(data.id.toString());
  const type1 = getTypeColor(data.types[0].type.name);
  const type2 = getTypeColor(data.types[1] && data.types[1].type.name);
  const gradientStr = `linear-gradient(45deg, ${type1}, ${type2})`;
  const formattedName = allPokemon.at(data.id - 1).name;
  const gen = allPokemon.at(data.id - 1).gen;

  const tabMapping: Map<TabNames, JSX.Element> = new Map([
    [
      "general",
      <GeneralTab
        data={data}
        grdColor={gradientStr}
        typeClr={type1}
        formattedName={formattedName}
        gen={gen}
        key={"general-tab"}
      />,
    ],
    ["stats", <StatsTab key={"stats-tab"} />],
    ["moves", <MovesTab key={"moves-tab"} />],
    ["evolutions", <EvolutionsTab key={"evolutions-tab"} />],
    ["forms", <FormsTab key={"forms-tab"} />],
    ["locations", <LocationsTab key={"locations-tab"} />],
  ]);

  //*Tab Array
  const tabItems = [];
  tabs.forEach((name) =>
    tabItems.push(
      <li
        style={{
          background: name === selectedTab ? gradientStr : "transparent",
          color: name === selectedTab ? "white" : type1,
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
          mixBlendMode: "screen",
        }}
      >
        <ArrowLeft />
      </Link>
      <h1 className={styles.heading}>{`about ${data.name}`}</h1>
      <div className={styles.pokeImgContainer}>
        <div
          style={{
            color: type1,
          }}
          className={alexandria.className}
        >
          {formattedName.toUpperCase()}
        </div>
        <div className={styles.pokeImgWrapper}>
          <Image
            src={`https://dfuzyzc1tyyvb.cloudfront.net/${strId}.png`}
            quality={100}
            width={600}
            height={600}
            alt={data.name}
            className={styles.pokeImg}
            priority
          />
        </div>
      </div>
      <section className={styles.detailsContainer}>
        <div className={styles.tabsContainer}>
          <ul className={alexandria.className}>{tabItems}</ul>
        </div>
        <div>{tabMapping.get(selectedTab)}</div>
      </section>
    </div>
  );
}
