import { useEffect, useState } from 'react';

export function useScrollRestore(): [number] {
  const [scrollPos, setScrollPos] = useState(0);

  const resetScroll = () => {
    sessionStorage.clear();
    setScrollPos(0);
  };

  useEffect(() => {
    setScrollPos(Number(sessionStorage.getItem('scrollPos') || 0));
  });

  useEffect(() => {
    if (scrollPos) setScrollPos(scrollPos);

    window.addEventListener('beforeunload', resetScroll);

    return () => window.removeEventListener('beforeunload', resetScroll);
  }, [scrollPos]);

  return [scrollPos];
}
