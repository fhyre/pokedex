import { IPokemon } from '../../types';
import styles from './styles/stats.module.scss';

export function Stats({ pokemon }: StatsProps): JSX.Element {
  const { stats } = pokemon;

  return (
    <section className={styles.container}>
      {stats.map((stat) => (
        <div key={stat.name} className={styles.dataField}>
          <h2>{stat.name}</h2>
          <p>{stat.base_stat}</p>
        </div>
      ))}
    </section>
  );
}

interface StatsProps {
  pokemon: IPokemon;
}
