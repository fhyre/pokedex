import styles from './search-bar.module.css';
import { CSSProperties } from 'react';
import { useDebounce } from './use-debounce';
import { Icon } from '@iconify/react';

interface ISearchBar {
  cb: (res: string) => object;
  style?: CSSProperties;
  className?: string;
}

export function SearchBar({ cb, style, className }: ISearchBar) {
  const [setDebounce] = useDebounce({ cb: cb });

  return (
    <div
      role="search"
      className={`${styles.container} ${className}`}
      style={style}
      tabIndex={0}
    >
      <Icon icon="jam:search" width={24} height={24} />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setDebounce(e.target.value)}
        tabIndex={0}
      />
    </div>
  );
}
