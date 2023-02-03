import styles from "./pokemon-details.module.scss";
import Image from "next/image";
import { convertId } from "../utils";
import { alexandria } from "@/assets/fonts";
import { useState } from "react";
import { getTypeColor } from "@/features/pokemon";

const initialTabs = new Map([
  ["general", true],
  ["stats", false],
  ["moves", false],
  ["evolutions", false],
  ["forms", false],
  ["locations", false],
]);

export function PokemonDetails({ id, data }): JSX.Element {
  const [tabs, setTabs] = useState(initialTabs);

  const strId = convertId(id);

  const type1 = getTypeColor(data.types[0].type.name);
  const type2 = getTypeColor(data.types[1] ? data.types[1].type.name : "white");

  const tabItems = [];
  tabs.forEach((selected, name) =>
    tabItems.push(
      <li
        style={{
          backgroundColor: selected ? type1 : "transparent",
          color: selected ? "white" : type1,
        }}
        onClick={(e) => console.log(e)}
        key={name}
      >
        {name.toUpperCase()}
      </li>
    )
  );

  return (
    <div className={styles.container}>
      <section className={styles.pokeImgWrapper}>
        <Image
          src={`https://dfuzyzc1tyyvb.cloudfront.net/${strId}.png`}
          quality={100}
          width={600}
          height={600}
          alt={data.name}
          className={styles.pokeImg}
        />
      </section>
      <section className={styles.detailsContainer}>
        <div>
          <ul className={alexandria.className}>{tabItems}</ul>
        </div>
      </section>
    </div>
  );
}

{
  /* <li
  key={"tab" + i}
  style={{
    backgroundColor: selected ? type1 : "transparent",
    color: selected ? "white" : type1,
  }}
  onClick={(e) => console.log(e)}
>
  {name.toUpperCase()}
</li>; */
}

{
  /* <li>General</li>
<li>Stats</li>
<li>Moves</li>
<li>Evolutions</li>
<li>Forms</li>
<li>Locations</li> */
}
