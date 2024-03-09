import { allPokemon, abilities, forms, pokeTypes, stats } from '../assets';

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

export function parseAllPokemon() {
  const MAX_POKEMON = 1025;
  const parsed = [];

  for (let i = 0; i < MAX_POKEMON; i++) {
    const toAdd = { ...allPokemon[i] };
    toAdd.abilities = [];
    toAdd.forms = [];
    toAdd.stats = [];
    toAdd.types = [];

    allPokemon[i].abilities.forEach((ability: IAbility) => {
      const { hidden, id } = ability;
      toAdd.abilities.push({
        hidden,
        name: abilities[id - 1].name,
        effect: abilities[id - 1].effect_entry.effect,
        short_effect: abilities[id - 1].effect_entry.short_effect,
      });
    });

    allPokemon[i].forms.forEach((formId: number) => {
      if (formId === i + 1) return;
      const tempForm = forms[formId];
      tempForm.types = [];
      forms[formId].types.forEach((typeId: number) => {
        tempForm.types.push(pokeTypes[typeId - 1]);
      });
      toAdd.forms.push(tempForm);
    });

    allPokemon[i].stats.forEach((stat: IStat) => {
      const { id, ...tempStat } = stat;
      tempStat.name = stats[stat.id - 1];
      toAdd.stats.push(tempStat);
    });

    allPokemon[i].types.forEach((typeId: number) => {
      toAdd.types.push(pokeTypes[typeId - 1]);
    });

    parsed.push(toAdd);
  }

  return parsed;
}
