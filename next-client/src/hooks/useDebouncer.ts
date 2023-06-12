import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useDebouncer = (cb: any, delay: number = 1000) => {
  const [timeoutState, setTimeoutState]: [any, Dispatch<SetStateAction<any>>] =
    useState(null);

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
