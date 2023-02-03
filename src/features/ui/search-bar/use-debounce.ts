import { useEffect, useState } from "react";

interface Debounce {
  cb: (e: string) => void;
}

export function useDebounce({ cb }: Debounce) {
  const [debouncedQ, setDebouncedQ] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => cb(debouncedQ), 100);
    return () => clearTimeout(timer);
  });

  return [setDebouncedQ];
}
