import { useEffect, useState } from 'react';

interface IDebounce {
  cb: (e: string) => void;
}

export function useDebounce({ cb }: IDebounce) {
  const [debouncedQ, setDebouncedQ] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => cb(debouncedQ), 100);
    return () => clearTimeout(timer);
  }, [cb, debouncedQ]);

  return [setDebouncedQ];
}
