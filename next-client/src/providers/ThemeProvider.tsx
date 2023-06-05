"use client";

import { Context, createContext, useEffect, useState } from "react";

export const ThemeContext: Context<any> = createContext([]);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.theme) setTheme(localStorage.theme);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
