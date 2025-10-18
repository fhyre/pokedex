import styles from './styles/general.module.scss';
import { useEffect } from 'react';
import { TypeIcon } from '../../pokemon-type-icon';
import { upperCaseFirstLetter } from '@/utils';
import { Pokemon } from '../../types';

export function General({ pokemon, gradientColor, typeColor }: GeneralProps) {
  const { id, abilities, gen, height, weight, name, types, species } = pokemon;

  useEffect(() => {
    const dataFields = document.querySelectorAll(`.${styles.container} > div`);
    dataFields.forEach((dataField) => {
      dataField.classList.add(`${styles.dataField}`);
    });

    const abilities = document.querySelectorAll(
      `.${styles.abilitiesContainer} > div`
    );

    abilities.forEach((abilityWrapper: HTMLElement) => {
      abilityWrapper.classList.add(`${styles.abilityWrapper}`);
      abilityWrapper.setAttribute('style', `background-color: ${typeColor}`);
      if (abilityWrapper.dataset.hidden === 'true') {
        abilityWrapper.style['filter'] = 'opacity(0.7)';
      }
    });
  }, [gradientColor, typeColor]);

  return (
    <section className={styles.container} style={{ color: typeColor }}>
      <div>
        <h2>ID</h2>
        <p>{'#' + id}</p>
      </div>
      <div>
        <h2>Name</h2>
        <p>{upperCaseFirstLetter(name)}</p>
      </div>
      <div>
        <h2>Species</h2>
        <p>{species.genus}</p>
      </div>
      <div>
        <h2>Type</h2>
        <div className={styles.typeContainer}>
          {types.map((type, i) => (
            <TypeIcon
              type={type}
              size="medium"
              key={type + i + 'medium'}
              prio
            />
          ))}
        </div>
      </div>
      <div>
        {abilities.length > 1 ? <h2>Abilities</h2> : <h2>Ability</h2>}
        <div className={styles.abilitiesContainer}>
          {abilities.map((ability, i) => (
            <div key={ability.name + i} data-hidden={ability.hidden}>
              <p>
                {ability.name
                  .split('-')
                  .map(
                    (word) => word?.at(0)?.toUpperCase() + word?.substring(1)
                  )
                  .join(' ')}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Generation</h2>
        <p>{gen}</p>
      </div>
      <div>
        <h2>Height</h2>
        <p>{`${height / 10} m`}</p>
      </div>
      <div>
        <h2>Weight</h2>
        <p>{`${weight / 10} kg`} </p>
      </div>
    </section>
  );
}

type GeneralProps = {
  pokemon: Pokemon;
  gradientColor: string;
  typeColor: string;
};
