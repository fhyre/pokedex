import { IPokemon } from '../../types';
import styles from './styles/stats.module.scss';

export function Stats({ pokemon, typeColor }: StatsProps): JSX.Element {
  const { stats } = pokemon;

  const maxBaseStat = Math.max(...stats.map((stat) => stat.base_stat));

  return (
    <section className={styles.container}>
      {stats.map((stat) => (
        <div key={stat.name} className={styles.statRowContainer}>
          <h2 style={{ color: typeColor }}>{stat.name}</h2>
          <div className={styles.statProgressContainer}>
            <div
              className={styles.statProgress}
              style={{
                width: `${(stat.base_stat / maxBaseStat) * 93}%`,
                backgroundColor: typeColor,
              }}
            />
          </div>
          <p style={{ color: typeColor }}>{stat.base_stat}</p>
        </div>
      ))}
    </section>
  );
}

interface StatsProps {
  pokemon: IPokemon;
  typeColor: string;
}
