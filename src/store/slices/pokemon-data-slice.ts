import { IPokemon, parseAllPokemon } from '@/features/pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IPokemonData = {
  data: parseAllPokemon(),
  query: '',
};

export const pokemonDataSlice = createSlice({
  name: 'pokemonData',
  initialState,
  reducers: {
    modifyQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});
interface IPokemonData {
  data: IPokemon[];
  query: string;
}

export const { modifyQuery } = pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
