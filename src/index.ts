import { useLayoutEffect, useCallback, useRef } from 'react';

export default function useEventCallback<T extends ((...args: any[]) => any)>(fn: T) {
  const ref = useRef<T>(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args) => {
    return ref.current(...args);
  }, []);
}
