import React, { ReactNode } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { ThemeProvider } from "../ThemeProvider";
import { useClickOutsideListener } from "./useClickOutsideListener";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

test("base", () => {});
