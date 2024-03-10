import { useEffect, useState } from 'react';

export function useScrollRestore(): [() => void, number] {
  const [scrollPos, setScrollPos] = useState(0);
  const onBeforeUnload = () => {
    sessionStorage.clear();
    setScrollPos(0);
  };

  useEffect(() => {
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos) setScrollPos(Number(scrollPos));

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, []);

  return [onBeforeUnload, scrollPos];
}
