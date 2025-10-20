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

export const darkenColor = (hex: string, percent: number): string => {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse r, g, b values
  const num = parseInt(hex, 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};
