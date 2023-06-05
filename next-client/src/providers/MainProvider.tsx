"use client";

import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./ThemeProvider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
