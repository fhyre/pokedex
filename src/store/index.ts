import { configureStore } from "@reduxjs/toolkit";
import allPokemonReducer from "./slices/all-pokemon-slice";

export const store = configureStore({
  reducer: {
    allPokemon: allPokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
