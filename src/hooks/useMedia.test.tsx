import React, { ReactNode } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { ThemeProvider } from "../ThemeProvider";
import { useMedia } from "./useMedia";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

test("should fallback to default", () => {
  const matchMedia = jest.fn();
  window.matchMedia = matchMedia;

  matchMedia.mockReturnValue({
    matches: false,
    media: "",
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

  const { result } = renderHook(
    () =>
      useMedia<number>([`(min-width 200px)`, `(min-width 400px)`], [1, 2], 0),
    { wrapper }
  );

  expect(result.current).toBe(0);
});

test("should use first media query", () => {
  const matchMedia = jest.fn();
  window.matchMedia = matchMedia;

  matchMedia.mockReturnValue({
    matches: true,
    media: `(min-width 400px)`,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

  const { result } = renderHook(
    () =>
      useMedia<number>([`(min-width 200px)`, `(min-width 400px)`], [1, 2], 0),
    { wrapper }
  );

  expect(result.current).toBe(1);
});

test("should use second media query", () => {
  const matchMedia = jest.fn();
  window.matchMedia = matchMedia;

  matchMedia.mockReturnValueOnce({
    matches: false,
    media: `(min-width 200px)`,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });
  matchMedia.mockReturnValueOnce({
    matches: true,
    media: `(min-width 400px)`,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  });

  const { result } = renderHook(
    () =>
      useMedia<number>([`(min-width 200px)`, `(min-width 400px)`], [1, 2], 0),
    { wrapper }
  );

  expect(result.current).toBe(2);
});
