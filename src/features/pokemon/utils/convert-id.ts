export function convertId(id: string) {
  let strId = id.toString();
  if (strId.length === 1) {
    strId = "000" + strId;
  } else if (strId.length === 2) {
    strId = "00" + strId;
  } else if (strId.length === 3) {
    strId = "0" + strId;
  }
  return strId;
}
