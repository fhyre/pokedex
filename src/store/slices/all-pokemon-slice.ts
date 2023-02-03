import { allPokemon } from "@/features/pokemon";
import { InitialPokeData } from "@/features/pokemon/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AllPokemonState {
  arr: InitialPokeData[];
  query: string;
}

const initialState: AllPokemonState = {
  arr: allPokemon,
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
