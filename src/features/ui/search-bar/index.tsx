import styles from './search-bar.module.scss';
import { CSSProperties } from 'react';
import { Icon } from '@iconify/react';

export function SearchBar({
  currentValue,
  cb,
  style,
  className,
}: SearchBarProps) {
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
        onChange={(e) => cb(e.target.value)}
        tabIndex={0}
        value={currentValue}
      />
    </div>
  );
}

type SearchBarProps = {
  currentValue: string;
  cb: (res: string) => void;
  style?: CSSProperties;
  className?: string;
};
