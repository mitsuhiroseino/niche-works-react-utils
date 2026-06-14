import { useCallback, useEffect, useRef } from 'react';

/**
 * マウントされているかどうかを判定する関数を返すフック
 * @returns
 */
export default function useIsMounted() {
  const isMountedRef = useRef(false);
  const isMounted = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMounted;
}
