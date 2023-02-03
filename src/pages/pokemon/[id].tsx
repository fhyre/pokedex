import { getPokemon, PokemonDetails } from "@/features/pokemon";
import { GetStaticPaths, GetStaticProps } from "next";

export default function DexEntry({ id, data }): JSX.Element {
  return (
    <main>
      <PokemonDetails id={id.toString()} data={data} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params["id"];
  const data = await getPokemon(id as string);

  return {
    props: {
      id: id,
      data: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokePaths = [];
  for (let i = 1; i < 1009; i++) {
    pokePaths.push({ params: { id: i.toString() } });
  }

  return {
    paths: pokePaths,
    fallback: false,
  };
};
