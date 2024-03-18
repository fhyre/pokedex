import { useEffect, useLayoutEffect } from 'react';
import { IPokemon } from '../../types';
import styles from './styles/stats.module.scss';

export function Stats({ pokemon, typeColor }: StatsProps): JSX.Element {
  const { stats } = pokemon;

  const maxBaseStat = Math.max(...stats.map((stat) => stat.base_stat));

  useLayoutEffect(() => {
    const statHeaders = document.querySelectorAll(
      `.${styles.statRowContainer} h2`
    );
    const largestWidth = Math.max(
      ...Array.from(statHeaders).map(
        (header) => header.getBoundingClientRect().width
      )
    );
    statHeaders.forEach(
      (header) => ((header as HTMLElement).style.width = `${largestWidth}px`)
    );

    const statProgressBars = document.querySelectorAll(
      `.${styles.statProgress}`
    );
    stats.forEach((stat, i) => {
      const growPercent = (stat.base_stat / maxBaseStat) * 91;
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
          <h2 style={{ color: typeColor }}>{stat.name}</h2>
          <div className={styles.statProgressContainer}>
            <div className={styles.statProgress} />
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
