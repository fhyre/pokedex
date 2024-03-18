import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function UrlChangeListener() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      const classNamesToRemove = ['.statAnimation'];
      document
        .querySelectorAll(classNamesToRemove.join(' '))
        .forEach((ele) => ele.remove());
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, []);

  return <></>;
}
