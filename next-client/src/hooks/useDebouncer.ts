import { useEffect, useState } from "react";

export const useDebouncer = (cb: any, delay = 1000) => {
  const [timeoutState, setTimeoutState]: any = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutState);
    };
  }, [cb, delay]);

  const callback = (...args: any) => {
    clearTimeout(timeoutState);

    const createdTimeout = setTimeout(() => {
      cb(...args);
    }, delay);

    setTimeoutState(createdTimeout);
  };
  return callback;
};
