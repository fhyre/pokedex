import { IPokemon, parseAllPokemon, IFilters } from '@/features/pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPokemonData = {
  data: parseAllPokemon(),
};

export const pokemonDataSlice = createSlice({
  name: 'pokemonData',
  initialState,
  reducers: {},
});
interface IPokemonData {
  data: IPokemon[];
}

export default pokemonDataSlice.reducer;
