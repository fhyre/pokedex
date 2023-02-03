import { Header } from "@/features/ui";
import { PokemonList } from "@/features/pokemon";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <PokemonList />
      </main>
    </>
  );
}
