import styles from './search-bar.module.scss';
import { CSSProperties, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export function SearchBar({
  currentValue,
  cb,
  style,
  className,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClear = () => {
    cb('');
    inputRef.current?.focus();
  };

  return (
    <div
      role="search"
      className={`${styles.container} ${className}`}
      style={style}
      tabIndex={0}
    >
      <Search width={16} height={16} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        onChange={(e) => cb(e.target.value)}
        tabIndex={0}
        value={currentValue}
      />
      {currentValue && (
        <button
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="Clear search"
          type="button"
        >
          <X width={12} height={12} />
        </button>
      )}
    </div>
  );
}

type SearchBarProps = {
  currentValue: string;
  cb: (res: string) => void;
  style?: CSSProperties;
  className?: string;
};
