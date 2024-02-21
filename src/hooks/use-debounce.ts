import { useState, useRef, useEffect } from "react";

const useDebounce = <T>(value: T, timeout = 1000, immediate = false) => {
  const [state, setState] = useState<T>(value);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined | null>(undefined);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    } else if (immediate) {
      setState(value);
    }

    timer.current = setTimeout(() => {
      setState(value);
      timer.current = undefined;
    }, timeout);
    return () => {
      // debounce 호출 된 상태로 컴포넌트 언마운트 되면 메모리 누수 됨,
      // 관련해서 언마운트 될 때 clearTimeout 호출
      if (!timer.current) return;
      clearTimeout(timer.current);
      timer.current = null;
    };
  }, [value, timeout, immediate]);

  return state;
};

export default useDebounce;
