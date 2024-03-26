import { useEffect, useLayoutEffect } from 'react';
import { Pokemon } from '../../types';
import styles from './styles/stats.module.scss';

export function Stats({ pokemon, typeColor }: StatsProps): JSX.Element {
  const { stats } = pokemon;

  const maxBaseStat = Math.max(...stats.map((stat) => stat.base_stat));

  useLayoutEffect(() => {
    const statHeaders = document.querySelectorAll(`.${styles.prefix}`);
    const largestWidth = Math.max(
      ...Array.from(statHeaders)
        .slice(0, statHeaders.length - 1)
        .map((header) => header.getBoundingClientRect().width)
    );
    statHeaders.forEach(
      (header) => ((header as HTMLElement).style.width = `${largestWidth}px`)
    );

    const statProgressBars = document.querySelectorAll(
      `.${styles.statProgress}`
    );
    stats.forEach((stat, i) => {
      const growPercent = (stat.base_stat / maxBaseStat) * 100;
      (statProgressBars[i] as HTMLElement).setAttribute(
        'style',
        `
        width: ${growPercent}%;
        background-color: ${typeColor};
        `
      );
      const statAnimation = document.createElement('style');
      statAnimation.className = 'statAnimation';

      statAnimation.innerHTML = `
        @keyframes progress-bar-grow-${i} {
          0% {
            width: 0;
          }
          100% {
            width: ${growPercent}%;
          }
        }
        
        .progress-bar-animation-${i}{
          animation: progress-bar-grow-${i} 500ms var(--ease-1);
        }
      `;
      document.head.appendChild(statAnimation);

      statProgressBars[i].classList.add(`progress-bar-animation-${i}`);
    });
  }, [maxBaseStat, stats, typeColor]);

  return (
    <section className={styles.container}>
      {stats.map((stat) => (
        <div key={stat.name} className={styles.statRowContainer}>
          <div className={styles.prefix}>
            <h2 style={{ color: typeColor }}>{stat.name}</h2>
            <p style={{ color: typeColor }}>{stat.base_stat}</p>
          </div>
          <div className={styles.statProgressContainer}>
            <div className={styles.statProgress} />
          </div>
        </div>
      ))}
      <div className={styles.prefix}>
        <h2 style={{ color: typeColor }}>Total</h2>
        <p style={{ color: typeColor }}>
          {pokemon.stats.reduce((accu, curr) => accu + curr.base_stat, 0)}
        </p>
      </div>
    </section>
  );
}

type StatsProps = {
  pokemon: Pokemon;
  typeColor: string;
};
