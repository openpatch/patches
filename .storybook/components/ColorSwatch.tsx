/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { CSSProperties } from "react";
import { Box } from "../../src/Box";
import { Card } from "../../src/Card";
import { CardContent } from "../../src/CardContent";
import { Text } from "../../src/Text";
import { Theme } from "../../src/themes/types";

export type ColorSwatchProps = {
  name: string;
  color: CSSProperties["color"];
};

export const ColorSwatch = ({ name, color, ...props }: ColorSwatchProps) => {
  return (
    <Card>
      <Box
        borderBottomWidth="standard"
        borderBottomColor="neutral.100"
        borderBottomStyle="solid"
        css={(theme: Theme) => css`
          background-color: ${color};
          height: 100px;
        `}
      ></Box>
      <CardContent>
        <Text>{name}</Text>
        <Text textColor="neutral.400" fontSize="standard">
          {color}
        </Text>
      </CardContent>
    </Card>
  );
};