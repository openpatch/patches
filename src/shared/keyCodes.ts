import { KeyboardEvent } from "react";

export const isEnter = (event: KeyboardEvent): boolean =>
  "key" in event && event.key === "Enter";

export const isSpacebar = (event: KeyboardEvent): boolean =>
  "key" in event && event.key === " ";

export const isArrowLeft = (event: KeyboardEvent): boolean =>
  "key" in event && event.key === "ArrowLeft";

export const isArrowRight = (event: KeyboardEvent): boolean =>
  "key" in event && event.key === "ArrowRight";

export const isArrowDown = (event: KeyboardEvent): boolean =>
  "key" in event && event.key === "ArrowDown";
