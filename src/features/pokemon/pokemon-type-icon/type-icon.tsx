import styles from "./type-icon.module.scss";
import { pokeTypes } from "@/features/pokemon";
import Image from "next/image";

interface ITypeIcon extends pokeTypes {
  size: "small" | "medium" | "large";
  prio?: boolean;
}

export function TypeIcon({ type, status, size, prio }: ITypeIcon): JSX.Element {
  return (
    <Image
      src={`/type-icons/${type}.png`}
      width={469}
      height={126}
      quality={100}
      alt=""
      className={styles[`${size}Type`]}
      priority={prio}
    />
  );
}

TypeIcon.defaultProps = {
  prio: false,
};
