const normal = "#929ca2";
const fighting = "#ce406a";
const flying = "#8fa9de";
const poison = "#ab6ac8";
const ground = "#d97845";
const rock = "#c5b68d";
const bug = "#91c02e";
const ghost = "#5269ad";
const steel = "#5b8ea3";
const fire = "#ff9c54";
const water = "#5191d6";
const grass = "#62bc5b";
const electric = "#f5d23d";
const psychic = "#fa7078";
const ice = "#72cfc0";
const dragon = "#0a6cc3";
const dark = "#5a5564";
const fairy = "#ec8fe6";

export const getTypeColor = (typing: string): string => {
  switch (typing) {
    case "normal":
      return normal;
    case "fighting":
      return fighting;
    case "flying":
      return flying;
    case "poison":
      return poison;
    case "ground":
      return ground;
    case "rock":
      return rock;
    case "bug":
      return bug;
    case "ghost":
      return ghost;
    case "steel":
      return steel;
    case "fire":
      return fire;
    case "water":
      return water;
    case "grass":
      return grass;
    case "electric":
      return electric;
    case "psychic":
      return psychic;
    case "ice":
      return ice;
    case "dragon":
      return dragon;
    case "dark":
      return dark;
    case "fairy":
      return fairy;
    default:
      return "#d4d4d4";
  }
};
