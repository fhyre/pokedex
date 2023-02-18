import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { throttle } from "./throttle";

export function useScrollListen(): [MutableRefObject<HTMLDivElement>, number] {
  const [scrollTopOffset, setScrollTopOffset] = useState<number>(0);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const currentRef = ref.current;

    currentRef.addEventListener("scroll", onScroll, { passive: true });

    return () => currentRef.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e: Event) => {
    requestAnimationFrame(() =>
      setScrollTopOffset((e.target as HTMLElement).scrollTop)
    );
  };

  return [ref, scrollTopOffset];
}
