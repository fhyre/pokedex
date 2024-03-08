import { useEffect, useState } from 'react';

export function useScrollRestore() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const scrollPos = sessionStorage.getItem('scrollPos');
    if (scrollPos) setScrollPos(Number(scrollPos));

    const onBeforeUnload = () => sessionStorage.clear();
    window.addEventListener('beforeunload', onBeforeUnload);

    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, []);

  return [scrollPos];
}
