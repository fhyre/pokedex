import pokemonData from '../assets/all-pokemon.json';
import abilities from '../assets/abilities.json';
import forms from '../assets/forms.json';
import stats from '../assets/stats.json';
import pokeTypes from '../assets/types.json';
import species from '../assets/species.json';
import { Pokemon } from '../types';

export function parseAllPokemon() {
  const MAX_POKEMON = 1025;
  const parsed = [];

  for (let i = 0; i < MAX_POKEMON; i++) {
    const currPokemon = pokemonData[i];
    const toAdd = { ...currPokemon };
    toAdd.abilities = [];
    toAdd.forms = [];
    toAdd.stats = [];
    toAdd.types = [];

    currPokemon.abilities.forEach((ability: Ability) => {
      const { hidden, id } = ability;
      toAdd.abilities.push({
        hidden,
        name: abilities[id - 1].name,
        effect: abilities[id - 1].effect_entry.effect,
        short_effect: abilities[id - 1].effect_entry.short_effect,
      });
    });

    currPokemon.forms.forEach((formId: number) => {
      if (formId === i + 1) return;
      const tempForm = forms[formId];
      tempForm.types = [];
      forms[formId].types.forEach((typeId: number) => {
        tempForm.types.push(pokeTypes[typeId - 1]);
      });
      toAdd.forms.push(tempForm);
    });

    currPokemon.stats.forEach((stat: Stat) => {
      const { id, ...tempStat } = stat;
      tempStat.name = stats[stat.id - 1];
      toAdd.stats.push(tempStat);
    });

    currPokemon.types.forEach((typeId: number) => {
      toAdd.types.push(pokeTypes[typeId - 1]);
    });

    toAdd.species = species[i];

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
