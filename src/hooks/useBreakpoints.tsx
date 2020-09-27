import { useState, useEffect } from "react";
import { useMedia } from "./useMedia";
import { useTheme } from "./useTheme";

const makeQuery = (breakpoint: string) => {
  return `(min-width: ${breakpoint})`;
};

export const useBreakpoints = <T,>(values: T[]) => {
  const [theme] = useTheme();
  const queries = theme.breakpoints.map((b) => makeQuery(b.toString()));
  // mutations are bad. Therefore, we make a copy.
  const copyValues = [...values];
  const defaultValue = copyValues.shift();
  const value = useMedia<T | undefined>(queries, copyValues, defaultValue);

  return value;
};
