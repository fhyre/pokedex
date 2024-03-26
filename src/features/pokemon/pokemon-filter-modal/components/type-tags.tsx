import { EPokeTypeColors, EPokeTypes } from '../../enums';
import styles from './styles/type-tags.module.scss';

export function TypeTags({ setType, currSelectedTypes }: TypeTagsProps) {
  return (
    <section className={styles.container}>
      <h2>Types</h2>
      <div className={styles.buttonsContainer}>
        {Object.values(EPokeTypes).map((type) => (
          <button
            key={type}
            onClick={() => setType(type)}
            style={{
              backgroundColor:
                currSelectedTypes.includes(type) &&
                EPokeTypeColors[type.toUpperCase()],
              color:
                currSelectedTypes.includes(EPokeTypes.ELECTRIC) &&
                type === EPokeTypes.ELECTRIC
                  ? 'var(--gray-8)'
                  : currSelectedTypes.includes(type) && 'var(--gray-1)',
              borderColor:
                currSelectedTypes.includes(type) &&
                EPokeTypeColors[type.toUpperCase()],
            }}
          >{`${type.at(0).toUpperCase()}${type.slice(1)}`}</button>
        ))}
      </div>
    </section>
  );
}

type TypeTagsProps = {
  setType: (type: EPokeTypes) => void;
  currSelectedTypes: EPokeTypes[];
};
