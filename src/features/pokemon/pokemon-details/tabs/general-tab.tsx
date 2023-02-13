import styles from "./general-tab.module.scss";
import { Pokemon, TypeIcon, Types } from "@/features/pokemon";
import { useEffect } from "react";

interface IGenTab {
  data: Pokemon;
  grdColor: string;
  typeClr: string;
}

export function GeneralTab({ data, grdColor, typeClr }: IGenTab): JSX.Element {
  const {
    name,
    abilities,
    base_experience,
    held_items,
    id,
    types,
    height,
    weight,
  } = data;

  useEffect(() => {
    const dataFields = document.querySelectorAll(`.${styles.container} > div`);
    dataFields.forEach((dataField) => {
      dataField.classList.add(`${styles.dataField}`);
      dataField.children[0].setAttribute(
        "style",
        `background-image: ${grdColor}`
      );
    });
  }, []);

  console.log(data);

  return (
    <div className={styles.container} style={{ color: typeClr }}>
      <div>
        <h2>ID</h2>
        <p>{"#" + id}</p>
      </div>
      <div>
        <h2>Name</h2>
        <p>{name.replace(/[a-z]/, (l) => l.toUpperCase())}</p>
      </div>
      <div>
        <h2>Species</h2>
        <p>Seed Pokemon</p>
      </div>
      <div>
        <h2>Type</h2>
        <div className={styles.typeContainer}>
          {types.map((res, i) => (
            <TypeIcon
              type={res.type.name as Types}
              size="medium"
              key={res.type.name + res.slot + i}
              prio
            />
          ))}
        </div>
      </div>
      <div>
        {abilities.length > 1 ? <h2>Abilities</h2> : <h2>Ability</h2>}
        <div className={styles.abilitiesContainer}>
          {abilities.map((abilSet, i) => (
            <p key={abilSet.ability.name + i}>{abilSet.ability.name}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>Height</h2>
        <p>{`${height / 10} m`}</p>
      </div>
      <div>
        <h2>Weight</h2>
        <p>{`${weight / 10} kg`} </p>
      </div>
    </div>
  );
}
