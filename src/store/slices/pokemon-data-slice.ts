import { Pokemon, parseAllPokemon } from '@/features/pokemon';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PokemonData = {
  data: parseAllPokemon(),
};

export const pokemonDataSlice = createSlice({
  name: 'pokemonData',
  initialState,
  reducers: {},
});
type PokemonData = {
  data: Pokemon[];
};

export default pokemonDataSlice.reducer;
