import { useEffect, useState } from 'react';

export function useDebounce({ cb }: UseDebounceProps) {
  const [debouncedQ, setDebouncedQ] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => cb(debouncedQ), 100);
    return () => clearTimeout(timer);
  }, [cb, debouncedQ]);

  return [setDebouncedQ];
}

type UseDebounceProps = {
  cb: (e: string) => void;
};
