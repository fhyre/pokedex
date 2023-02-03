import SearchIcon from "@/public/icons/search-icon";
import { CSSProperties } from "react";
import styles from "./search-bar.module.css";
import { useDebounce } from "./use-debounce";

interface SearchBar {
  cb: (res: string) => object;
  style?: CSSProperties;
  className?: string;
}

export function SearchBar({ cb, style, className }: SearchBar): JSX.Element {
  const [setDebounce] = useDebounce({ cb: cb });

  return (
    <div
      role="search"
      className={`${styles.container} ${className}`}
      style={style}
      tabIndex={0}
    >
      <SearchIcon style={{ overflow: "initial" }} />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setDebounce(e.target.value)}
        tabIndex={0}
      />
    </div>
  );
}
