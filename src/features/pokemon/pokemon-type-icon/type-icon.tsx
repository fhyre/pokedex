import styles from "./type-icon.module.scss";
import { pokeTypes } from "../types";
import Image from "next/image";

export function TypeIcon({ type, status, format }: pokeTypes): JSX.Element {
  return (
    <Image
      src={`/type-icons/${type}.png`}
      width={469}
      height={126}
      quality={100}
      alt=""
      className={styles.smallType}
    />
  );
}

{
  /* <div
      className={`${styles[type]} ${styles[status]} ${
        styles[`${format}Sprite`]
      }`}
      aria-label={type}
    /> */
}
