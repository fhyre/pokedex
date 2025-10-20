import { EPokeTypes, EStatusTypes } from '../enums';

export type NameURL = {
  name: string;
  url: string;
};

export type Pokemon = {
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
  moves: {
    id: number;
    name: string;
    acc: number | null;
    dmg_class: string;
    eff_chance: number | null;
    contest_type: string;
    pow: number | null;
    pp: number;
    prio: number;
    type: string;
    target: string;
    machine: boolean;
    stat_changes: any[];
    effect: string;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        desc: string;
      };
      version_group: {
        regions: string[];
        versions: string[];
      };
    }[];
  }[];
  evolutions: any; // The evolution chain structure
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
    varieties: number[];
    egg_groups: string;
  };
};

export type PokeTypes = {
  type: EPokeTypes;
  status?: EStatusTypes;
};

export type Filters = {
  query: string;
  generations: number[];
  types: EPokeTypes[];
};
