/** @jsx jsx */
import * as CSS from "csstype";
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import { Grid, GridProps } from "./Grid";
import { ResponsiveProp } from "./system/types";

export type AutoGridProps = {
  children?: ReactNode;
  columns?: ResponsiveProp<number>;
  minChildWidth?: ResponsiveProp<CSS.Properties["width"]>;
  gap?: GridProps["gridGap"];
  gapX?: GridProps["gridColumnGap"];
  gapY?: GridProps["gridRowGap"];
};

export const AutoGrid = ({
  children,
  columns,
  minChildWidth,
  gap,
  gapX,
  gapY,
}: AutoGridProps) => {
  let templateColumns: Array<string> = [];

  if (minChildWidth && !Array.isArray(minChildWidth)) {
    minChildWidth = [minChildWidth];
    templateColumns = minChildWidth.map(
      (m) => `repeat(auto-fit, minmax(${m}, 1fr))`
    );
  } else if (columns && !Array.isArray(columns)) {
    columns = [columns];
    templateColumns = columns.map((c) => `repeat(${c}, 1fr)`);
  }

  return (
    <Grid
      gridGap={gap}
      gridRowGap={gapY}
      gridColumnGap={gapX}
      gridTemplateColumns={templateColumns}
    >
      {children}
    </Grid>
  );
};
