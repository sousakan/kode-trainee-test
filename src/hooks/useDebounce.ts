import debounce from 'lodash.debounce';
import { useMemo, useRef } from 'react';

type FuncType = Parameters<typeof debounce>[0];

export default function useDebounce(func: FuncType, delay: number) {
  const f = useRef<FuncType>(func);

  return useMemo(() => {
    return debounce((...args) => f.current(...args), delay);
  }, [f, delay]);
}
