import { useLayoutEffect, useCallback, useRef, useState, useEffect } from 'react';

export function useEventCallback<T extends ((...args: any[]) => any)>(fn: T) {
  const ref = useRef<T>(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args) => {
    return ref.current(...args);
  }, []);
}

export function useConverseHandler(initState = false) {
  const [state, setState] = useState(initState);
  const toggle = useEventCallback(() => {
    setState((s) => !s);
  });
  return {
    state,
    toggle,
    setState,
  }
}