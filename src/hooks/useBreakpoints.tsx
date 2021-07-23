import { ResponsiveProp } from "../system/types";
import { useMedia } from "./useMedia";
import { useTheme } from "./useTheme";

const makeQuery = (breakpoint: string) => {
  return `(min-width: ${breakpoint})`;
};

export const useBreakpoints = <T,>(values: ResponsiveProp<T>) => {
  const [theme] = useTheme();
  const queries = theme.breakpoints.map((b) => makeQuery(b.toString()));
  if (!values) {
    values = [];
  } else if (!Array.isArray(values)) {
    values = [values];
  }
  // mutations are bad. Therefore, we make a copy.
  const copyValues = [...values];
  const defaultValue = copyValues.shift();
  const value = useMedia<T | undefined>(queries, copyValues, defaultValue);

  return value;
};
