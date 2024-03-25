import { EPokeTypes, EStatusTypes } from '../enums';

export interface INameURL {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  abilities: {
    effect: string;
    hidden: boolean;
    name: string;
    short_effect: string;
  }[];
  base_exp: number;
  forms: {
    battle_only: boolean;
    mega: boolean;
    name: string;
    types: EPokeTypes[];
  }[];
  gen: number;
  height: number;
  weight: number;
  held_items: {
    name: string;
    chance: number;
  }[];
  name: string;
  stats: { base_stat: number; effort: number; name: string }[];
  types: EPokeTypes[];
  species: {
    base_happiness: number;
    capture_rate: number;
    evolution_chain: number;
    gender_rate: number;
    genus: string;
    baby: boolean;
    legendary: boolean;
    mythical: boolean;
    hatch_counter: number;
    gender_diff: boolean;
    growth_rate: string;
    switch_form: boolean;
    varietes: number[];
    egg_groups: string;
  };
}

export interface IPokeTypes {
  type: EPokeTypes;
  status?: EStatusTypes;
}

// TODO: base stats below or over a range
export interface IFilters {
  query: string;
  generations: number[];
  types: EPokeTypes[];
}
