export interface NameUrl {
  name: string;
  url: string;
}

export interface InitialPokeData {
  id: number;
  name: string;
  types: Types[];
  gen: number;
}

type Types =
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

export interface pokeTypes {
  type: Types;
  status?: "physical" | "special" | "status";
  format: "card";
}
