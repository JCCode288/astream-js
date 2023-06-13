"use client";

import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./ThemeProvider";
import GoogleProvider from "./GoogleProvider";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GoogleProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </GoogleProvider>
  );
}
