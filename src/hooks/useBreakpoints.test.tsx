import React, { ReactNode } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { ThemeProvider } from "../ThemeProvider";

import { useBreakpoints } from "./useBreakpoints";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

test("should fallback to default", () => {
  const matchMedia = jest.fn();
  window.matchMedia = matchMedia;

  matchMedia.mockReturnValue({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

  const { result } = renderHook(
    () => useBreakpoints<number>([0, 1, 2]),
    {
      wrapper,
    }
  );
  expect(result.current).toBe(0);
});

test("should use first value", () => {
  const matchMedia = jest.fn();
  window.matchMedia = matchMedia;

  matchMedia.mockReturnValue({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

  const { result } = renderHook(
    () => useBreakpoints<number>([0, 1, 2]),
    {
      wrapper,
    }
  );
  expect(result.current).toBe(1);
});

test("should use first value", () => {
  const matchMedia = jest.fn();
  window.matchMedia = matchMedia;

  matchMedia.mockReturnValueOnce({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

  matchMedia.mockReturnValueOnce({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

  const { result } = renderHook(
    () => useBreakpoints<number>([0, 1, 2]),
    {
      wrapper,
    }
  );
  expect(result.current).toBe(2);
});
