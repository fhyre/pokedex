import { RefObject, useEffect, useRef, useState } from 'react';

export function useScrollListen(): [RefObject<HTMLDivElement | null>, number] {
  const [scrollTopOffset, setScrollTopOffset] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = (e: Event) => {
    requestAnimationFrame(() =>
      setScrollTopOffset((e.target as HTMLElement).scrollTop)
    );
  };

  useEffect(() => {
    if (!ref.current) return;
    const currentRef = ref.current;

    currentRef.addEventListener('scroll', onScroll, { passive: true });

    return () => currentRef.removeEventListener('scroll', onScroll);
  }, []);

  return [ref, scrollTopOffset];
}
