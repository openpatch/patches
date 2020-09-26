import { system } from "styled-system";
import { ResponsiveProp, SystemCursor } from "./types";

export type CursorProps = {
  cursor?: ResponsiveProp<SystemCursor>;
};

export const cursor = system({
  cursor: {
    scale: "cursor",
    property: "cursor",
  },
});
