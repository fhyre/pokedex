import { IPokemon, parseAllPokemon } from '@/features/pokemon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IAllPokemon = {
  data: parseAllPokemon(),
  query: '',
};

export const allPokemonSlice = createSlice({
  name: 'allPokemon',
  initialState,
  reducers: {
    modifyQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});
interface IAllPokemon {
  data: IPokemon[];
  query: string;
}

export const { modifyQuery } = allPokemonSlice.actions;

export default allPokemonSlice.reducer;
