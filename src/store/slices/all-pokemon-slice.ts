import { IPokemon, parseAllPokemon } from "@/features/pokemon";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAllPokemon {
  all: IPokemon[];
  query: string;
}

const initialState: IAllPokemon = {
  all: parseAllPokemon(),
  query: "",
};

export const allPokemonSlice = createSlice({
  name: "allPokemon",
  initialState,
  reducers: {
    modifyQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { modifyQuery } = allPokemonSlice.actions;

export default allPokemonSlice.reducer;
