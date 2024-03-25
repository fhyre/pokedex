import { EPokeTypes, EStatusType } from '../enums';

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
    types: Types[];
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
  types: Types[];
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

export type Types =
  | EPokeTypes.NORMAL
  | EPokeTypes.FIGHTING
  | EPokeTypes.FLYING
  | EPokeTypes.POISON
  | EPokeTypes.GROUND
  | EPokeTypes.ROCK
  | EPokeTypes.BUG
  | EPokeTypes.GHOST
  | EPokeTypes.STEEL
  | EPokeTypes.FIRE
  | EPokeTypes.WATER
  | EPokeTypes.GRASS
  | EPokeTypes.ELECTRIC
  | EPokeTypes.PSYCHIC
  | EPokeTypes.ICE
  | EPokeTypes.DRAGON
  | EPokeTypes.DARK
  | EPokeTypes.FAIRY;

export interface IPokeTypes {
  type: Types;
  status?: EStatusType.PHYSICAL | EStatusType.SPECIAL | EStatusType.STATUS;
}

// TODO: base stats below or over a range
export interface IFilters {
  query: string;
  generations: number[];
  types: Types[];
}
