import { jsonFetch } from "@/lib";
import { NameUrl } from "@/features/pokemon";

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

interface Pokemon {
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

const BASE_URL = "https://pokeapi.co/api/v2/";

interface AllPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: NameUrl[];
}

export async function getPokemon(id: string): Promise<Pokemon> {
  return await jsonFetch<Pokemon>({
    url: BASE_URL + "pokemon/" + id,
    options: { method: "GET" },
  });
}

export async function getAllPokemon(): Promise<AllPokemon> {
  return await jsonFetch<AllPokemon>({
    url: `${BASE_URL}pokemon?limit=99999`,
    options: { method: "GET" },
  });
}

//!To get weight divide by 10 (kg) to get height divide by 10 (m)
export async function formattedPokeData(id: string): Promise<any> {
  //* Formatted Data
  const pokemon: Pokemon = await getPokemon(id);
  const formatted = {
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    weight: pokemon.weight,
    name: pokemon.name,
    abilities: [],
    types: [],
    held_items: [],
    stats: [],
  };

  //*Abilities
  for (const obj of pokemon.abilities) {
    const abilityFormatted = {
      name: obj.ability.name,
      is_hidden: obj.is_hidden,
    };

    const abilityDetails = await jsonFetch<any>({
      url: obj.ability.url,
      options: { method: "GET" },
    });

    for (const details of abilityDetails.effect_entries) {
      if (details.language.name === "en") {
        abilityFormatted.effect = details.effect;
        abilityFormatted.short_effect = details.short_effect;
      }
    }

    formatted.abilities.push(abilityFormatted);
  }

  //*Pokemon Genra
  const speciesData = await jsonFetch<any>({
    url: pokemon.species.url,
    options: { method: "GET" },
  });

  for (const obj of speciesData.genera)
    if (obj.language.name === "en") formatted.genus = obj.genus;

  //*Stats
  for (const obj of pokemon.stats)
    formatted.stats.push({ name: obj.stat.name, base_stat: obj.base_stat });

  //*Types
  for (const obj of pokemon.types) {
    const typeFormatted = {
      name: obj.type.name,
      double_damage_from: [],
      double_damage_to: [],
      half_damage_from: [],
      half_damage_to: [],
      no_damage_from: [],
      no_damage_to: [],
    };
    const typeData = await jsonFetch<any>({
      url: obj.type.url,
      options: { method: "GET" },
    });

    for (const obj of typeData.damage_relations.double_damage_from)
      typeFormatted.double_damage_from.push(obj.name);

    for (const obj of typeData.damage_relations.double_damage_to)
      typeFormatted.double_damage_to.push(obj.name);

    for (const obj of typeData.damage_relations.half_damage_from)
      typeFormatted.half_damage_from.push(obj.name);

    for (const obj of typeData.damage_relations.half_damage_to)
      typeFormatted.half_damage_to.push(obj.name);

    for (const obj of typeData.damage_relations.no_damage_from)
      typeFormatted.no_damage_from.push(obj.name);

    for (const obj of typeData.damage_relations.no_damage_to)
      typeFormatted.no_damage_to.push(obj.name);

    formatted.types.push(typeFormatted);
  }

  //*Held Items
  for (const obj of pokemon.held_items) {
    const fHeldItem = { name: obj.item.name };
    const heldItemData = await jsonFetch<any>({
      url: obj.item.url,
      options: {
        method: "GET",
      },
    });

    fHeldItem.effect = heldItemData.effect_entries.at(0).effect;

    formatted.held_items.push(fHeldItem);
  }

  return formatted;
}

// export async function templatePokeData(): Promise<InitialPokeData[]> {
//   const results = await getAllPokemon().then((res) => res.results);
//   const initialSet: InitialPokeData[] = [];
//   for (const data of results) {
//     const res = await getPokemon(data.url);
//     const mapTypes = (): NameUrl[] =>
//       res.types.map((type): NameUrl => type.type);
//     initialSet.push({
//       id: res.id,
//       name: res.name.split("-").at(0),
//       sprite: res.sprites.front_default,
//       types: mapTypes(),
//     });
//   }

//   return initialSet;
// }
