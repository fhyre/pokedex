import styles from './styles/generation-tags.module.scss';

export function GenerationTags({
  setGeneration,
  currSelectedGenerations,
}: GenerationTagsProps) {
  const generations = Array.from(Array(9).keys(), (i) => i + 1);

  return (
    <section className={styles.container}>
      <h2>Generations</h2>
      <div className={styles.buttonsContainer}>
        {generations.map((i) => (
          <button
            key={`Generation ${i}`}
            style={{
              backgroundColor: currSelectedGenerations.includes(i)
                ? 'var(--blue-1)'
                : 'transparent',
            }}
            onClick={() => setGeneration(i)}
          >{`Generation ${i}`}</button>
        ))}
      </div>
    </section>
  );
}

type GenerationTagsProps = {
  setGeneration: (a: number) => void;
  currSelectedGenerations: number[];
};
