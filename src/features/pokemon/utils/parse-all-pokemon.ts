import pokemonData from '../assets/all-pokemon.json';
import abilities from '../assets/abilities.json';
import forms from '../assets/forms.json';
import stats from '../assets/stats.json';
import pokeTypes from '../assets/types.json';

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

    currPokemon.abilities.forEach((ability: IAbility) => {
      const { hidden, id } = ability;
      toAdd.abilities.push({
        hidden,
        name: abilities[id - 1].name,
        effect: abilities[id - 1].effect_entry.effect,
        short_effect: abilities[id - 1].effect_entry.short_effect,
      });
    });

    pokemonData[i].forms.forEach((formId: number) => {
      if (formId === i + 1) return;
      const tempForm = forms[formId];
      tempForm.types = [];
      forms[formId].types.forEach((typeId: number) => {
        tempForm.types.push(pokeTypes[typeId - 1]);
      });
      toAdd.forms.push(tempForm);
    });

    pokemonData[i].stats.forEach((stat: IStat) => {
      const { id, ...tempStat } = stat;
      tempStat.name = stats[stat.id - 1];
      toAdd.stats.push(tempStat);
    });

    pokemonData[i].types.forEach((typeId: number) => {
      toAdd.types.push(pokeTypes[typeId - 1]);
    });

    parsed.push(toAdd);
  }

  return parsed;
}

interface IAbility {
  hidden: boolean;
  id: number;
}

interface IStat {
  base_stat: number;
  effort: number;
  id?: number;
  name?: string;
}
