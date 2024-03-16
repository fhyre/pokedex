export const isMobile = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

export const upperCaseFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
