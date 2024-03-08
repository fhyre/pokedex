import { PokemonDetails } from '@/features/pokemon';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function DexEntry({ id }) {
  return (
    <main>
      <PokemonDetails id={id} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params['id'];

  return {
    props: {
      id: id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokePaths = [];
  for (let i = 1; i < 1011; i++) {
    pokePaths.push({ params: { id: i.toString() } });
  }

  return {
    paths: pokePaths,
    fallback: false,
  };
};
