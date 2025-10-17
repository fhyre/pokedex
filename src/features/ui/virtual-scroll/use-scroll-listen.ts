import { RefObject, useEffect, useRef, useState } from 'react';

export function useScrollListen(): [RefObject<HTMLDivElement>, number] {
  const [scrollTopOffset, setScrollTopOffset] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    currentRef.addEventListener('scroll', onScroll, { passive: true });

    return () => currentRef.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = (e: Event) => {
    requestAnimationFrame(() =>
      setScrollTopOffset((e.target as HTMLElement).scrollTop)
    );
  };

  return [ref, scrollTopOffset];
}
