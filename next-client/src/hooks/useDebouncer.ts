import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useDebouncer = (cb: any, delayMs: number = 700) => {
  const [timeoutState, setTimeoutState]: [any, Dispatch<SetStateAction<any>>] =
    useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutState);
    };
  }, [cb, delayMs]);

  const callback = (...args: any) => {
    clearTimeout(timeoutState);

    const createdTimeout = setTimeout(() => {
      cb(...args);
    }, delayMs);

    setTimeoutState(createdTimeout);
  };
  return callback;
};
