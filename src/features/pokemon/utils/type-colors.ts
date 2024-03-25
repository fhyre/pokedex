import { EPokeTypeColors } from '../enums';

export const getTypeColor = (typing: string): string => {
  switch (typing) {
    case 'normal':
      return EPokeTypeColors.NORMAL;
    case 'fighting':
      return EPokeTypeColors.FIGHTING;
    case 'flying':
      return EPokeTypeColors.FLYING;
    case 'poison':
      return EPokeTypeColors.POISON;
    case 'ground':
      return EPokeTypeColors.GROUND;
    case 'rock':
      return EPokeTypeColors.ROCK;
    case 'bug':
      return EPokeTypeColors.BUG;
    case 'ghost':
      return EPokeTypeColors.GHOST;
    case 'steel':
      return EPokeTypeColors.STEEL;
    case 'fire':
      return EPokeTypeColors.FIRE;
    case 'water':
      return EPokeTypeColors.WATER;
    case 'grass':
      return EPokeTypeColors.GRASS;
    case 'electric':
      return EPokeTypeColors.ELECTRIC;
    case 'psychic':
      return EPokeTypeColors.PSYCHIC;
    case 'ice':
      return EPokeTypeColors.ICE;
    case 'dragon':
      return EPokeTypeColors.DRAGON;
    case 'dark':
      return EPokeTypeColors.DARK;
    case 'fairy':
      return EPokeTypeColors.FAIRY;
    default:
      return '#adb5bd';
  }
};
