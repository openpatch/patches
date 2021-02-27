import React, { ReactNode } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { baseTheme } from "../themes";
import { red } from "../themes/colors";
import { useTheme } from "./useTheme";
import { ThemeProvider } from "../ThemeProvider";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

test("should use default theme", () => {
  const { result } = renderHook(() => useTheme({ colors: { primary: red } }), {
    wrapper,
  });

  expect(result.current[0].colors.primary).toEqual(red);
});

test("should return base", () => {
  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(result.current.length).toBe(2);
  expect(result.current[0]).toEqual(baseTheme);
});

test("should change theme", () => {
  const { result } = renderHook(() => useTheme(), { wrapper });

  act(() => {
    result.current[1]({
      colors: {
        primary: red,
      },
    });
  });

  expect(result.current[0].colors.primary).toEqual(red);
});
