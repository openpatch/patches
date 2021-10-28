import { renderHook } from "@testing-library/react-hooks";
import React, { ReactNode } from "react";
import { ThemeProvider } from "../ThemeProvider";
import { baseTheme } from "../themes";
import { useTheme } from "./useTheme";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

test("should return base", () => {
  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.length).toBe(2);
  expect(result.current[0]).toEqual(baseTheme);
});
