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
}

export type Types =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy";

export interface IPokeTypes {
  type: Types;
  status?: "physical" | "special" | "status";
}
