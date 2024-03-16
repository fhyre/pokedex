import { configureStore } from '@reduxjs/toolkit';
import pokemonDataReducer from './slices/pokemon-data-slice';

export const store = configureStore({
  reducer: {
    pokemonData: pokemonDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
