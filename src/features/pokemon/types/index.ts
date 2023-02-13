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

export interface pokeTypes {
  type: Types;
  status?: "physical" | "special" | "status";
}

interface GameIndex {
  game_index: number;
  version: NameUrl;
}

interface VersionDetail {
  rarity: number;
  version: NameUrl;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NameUrl;
  verison_group: NameUrl;
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface Pokemon {
  abilities: { ability: NameUrl; is_hidden: boolean; slot: number }[];
  base_experience: number;
  forms: NameUrl[];
  game_indicies: GameIndex[];
  height: number;
  held_items: {
    item: NameUrl;
    version_details: VersionDetail[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: NameUrl;
    version_group_details: VersionGroupDetail[];
  }[];
  name: string;
  order: number;
  past_types: [];
  species: NameUrl;
  sprites: Sprites;
  stats: {
    base_stat: number;
    effort: number;
    stat: NameUrl;
  }[];
  types: {
    slot: number;
    type: NameUrl;
  }[];
  weight: number;
}
