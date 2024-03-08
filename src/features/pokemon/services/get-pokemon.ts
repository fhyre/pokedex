import { jsonFetch } from '@/lib';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function getPokemon(id: string): Promise<any> {
  return await jsonFetch<any>({
    url: BASE_URL + 'pokemon/' + id,
    options: { method: 'GET' },
  });
}

// //!To get weight divide by 10 (kg) to get height divide by 10 (m)
// export async function formattedPokeData(id: string): Promise<any> {
//   //* Formatted Data
//   const pokemon: Pokemon = await getPokemon(id);
//   const formatted = {
//     base_experience: pokemon.base_experience,
//     height: pokemon.height,
//     weight: pokemon.weight,
//     name: pokemon.name,
//     abilities: [],
//     types: [],
//     held_items: [],
//     stats: [],
//   };
//
//   //*Abilities
//   for (const obj of pokemon.abilities) {
//     const abilityFormatted = {
//       name: obj.ability.name,
//       is_hidden: obj.is_hidden,
//     };
//
//     const abilityDetails = await jsonFetch<any>({
//       url: obj.ability.url,
//       options: { method: "GET" },
//     });
//
//     for (const details of abilityDetails.effect_entries) {
//       if (details.language.name === "en") {
//         abilityFormatted.effect = details.effect;
//         abilityFormatted.short_effect = details.short_effect;
//       }
//     }
//
//     formatted.abilities.push(abilityFormatted);
//   }
//
//   //*Pokemon Genra
//   const speciesData = await jsonFetch<any>({
//     url: pokemon.species.url,
//     options: { method: "GET" },
//   });
//
//   for (const obj of speciesData.genera)
//     if (obj.language.name === "en") formatted.genus = obj.genus;
//
//   //*Stats
//   for (const obj of pokemon.stats)
//     formatted.stats.push({ name: obj.stat.name, base_stat: obj.base_stat });
//
//   //*Types
//   for (const obj of pokemon.types) {
//     const typeFormatted = {
//       name: obj.type.name,
//       double_damage_from: [],
//       double_damage_to: [],
//       half_damage_from: [],
//       half_damage_to: [],
//       no_damage_from: [],
//       no_damage_to: [],
//     };
//     const typeData = await jsonFetch<any>({
//       url: obj.type.url,
//       options: { method: "GET" },
//     });
//
//     for (const obj of typeData.damage_relations.double_damage_from)
//       typeFormatted.double_damage_from.push(obj.name);
//
//     for (const obj of typeData.damage_relations.double_damage_to)
//       typeFormatted.double_damage_to.push(obj.name);
//
//     for (const obj of typeData.damage_relations.half_damage_from)
//       typeFormatted.half_damage_from.push(obj.name);
//
//     for (const obj of typeData.damage_relations.half_damage_to)
//       typeFormatted.half_damage_to.push(obj.name);
//
//     for (const obj of typeData.damage_relations.no_damage_from)
//       typeFormatted.no_damage_from.push(obj.name);
//
//     for (const obj of typeData.damage_relations.no_damage_to)
//       typeFormatted.no_damage_to.push(obj.name);
//
//     formatted.types.push(typeFormatted);
//   }
//
//   //*Held Items
//   for (const obj of pokemon.held_items) {
//     const fHeldItem = { name: obj.item.name };
//     const heldItemData = await jsonFetch<any>({
//       url: obj.item.url,
//       options: {
//         method: "GET",
//       },
//     });
//
//     fHeldItem.effect = heldItemData.effect_entries.at(0).effect;
//
//     formatted.held_items.push(fHeldItem);
//   }
//
//   return formatted;
// }
