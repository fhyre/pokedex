import pokemonData from '../assets/all-pokemon.json';
import abilities from '../assets/abilities.json';
import forms from '../assets/forms.json';
import stats from '../assets/stats.json';
import pokeTypes from '../assets/types.json';
import species from '../assets/species.json';
import moves from '../assets/moves.json';
import items from '../assets/items.json';
import versionGroups from '../assets/version-groups.json';
import evolutions from '../assets/evolutions.json';
import methods from '../assets/methods.json';
import { Pokemon } from '../types';
import { EPokeTypes } from '../enums';

export function parseAllPokemon() {
  const MAX_POKEMON = 1025;
  const parsed: Pokemon[] = [];

  for (let i = 0; i < MAX_POKEMON; i++) {
    const currPokemon = pokemonData[i];

    const toAdd: Pokemon = {
      ...currPokemon,
      abilities: [],
      forms: [],
      stats: [],
      types: [],
      moves: [],
      evolutions: null,
    };

    currPokemon.abilities.forEach((ability: Ability) => {
      const { hidden, id } = ability;
      toAdd.abilities.push({
        hidden,
        name: abilities[id - 1].name,
        effect: abilities[id - 1].effect_entry?.effect || '',
        short_effect: abilities[id - 1].effect_entry?.short_effect || '',
      });
    });

    currPokemon.forms.forEach((formId: number) => {
      if (formId === i + 1) return;
      const tempForm = forms[formId];
      tempForm.types = [];
      forms[formId].types.forEach((typeId: number) => {
        tempForm.types.push(pokeTypes[typeId - 1] as EPokeTypes);
      });
      toAdd.forms.push(tempForm);
    });

    currPokemon.stats.forEach((stat: Stat) => {
      const { id, ...tempStat } = stat;
      tempStat.name = stats[id! - 1];
      toAdd.stats.push(
        tempStat as { base_stat: number; effort: number; name: string }
      );
    });

    currPokemon.types.forEach((typeId: number) => {
      toAdd.types.push(pokeTypes[typeId - 1] as EPokeTypes);
    });

    currPokemon.moves.forEach((moveData: any) => {
      const moveDetails = moves[moveData.id - 1];
      const parsedMove = {
        ...moveDetails,
        id: moveData.id,
        version_group_details: moveData.version_group_details.map(
          (vgd: any) => ({
            level_learned_at: vgd.level_learned_at,
            move_learn_method: methods[vgd.move_learn_method - 1],
            version_group: versionGroups[vgd.version_group - 1],
          })
        ),
      };
      toAdd.moves.push(parsedMove as any);
    });

    toAdd.species = species[i];
    toAdd.evolutions = evolutions[toAdd.species.evolution_chain];

    parsed.push(toAdd);
  }

  return parsed as Pokemon[];
}

type Ability = {
  hidden: boolean;
  id: number;
};

type Stat = {
  base_stat: number;
  effort: number;
  id?: number;
  name?: string;
};
