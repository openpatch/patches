/** @jsx jsx */
import { jsx, css, Theme } from "@emotion/react";
import { Source } from "@storybook/components";
import { AutoGrid } from "../../src/AutoGrid";
import { ColorSwatch } from "./ColorSwatch";
import { Heading } from "../../src/Heading";
import { useTheme } from "../../src/hooks";
import { Fragment } from "react";

export type ColorProps = {
  name: string;
  color: Theme["colors"]["primary"] | string;
};

export const Color = ({ name, color }: ColorProps) => {
  return (
    <AutoGrid minChildWidth="100px" gap="standard">
      {typeof color === "object" ? (
        Object.keys(color).map((shade) => (
          <ColorSwatch name={shade} key={shade} color={color[shade]} />
        ))
      ) : (
        <ColorSwatch name={name} key={color} color={color} />
      )}
    </AutoGrid>
  );
};

export const Colors = () => {
  const [{ colors }] = useTheme();
  return (
    <Fragment>
      <Source
        language="ts"
        code={`
      theme.colors[key.shade];
      `}
      />
      <AutoGrid gap="standard">
        {Object.keys(colors).map((color) => (
          <div key={color}>
            <Heading as="h3">{color}</Heading>
            <Color name={color} color={colors[color]} />
          </div>
        ))}
      </AutoGrid>
    </Fragment>
  );
};
