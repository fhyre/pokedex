import { Header } from '@/features/ui';
import { PokemonList } from '@/features/pokemon';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PokemonList />
      </main>
    </>
  );
}
