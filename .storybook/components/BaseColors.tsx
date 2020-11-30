import { jsx, css } from "@emotion/react";
import { Source } from "@storybook/components";
import { AutoGrid } from "../../src/AutoGrid";
import { useTheme } from "../../src/hooks";
import { ColorSwatch } from "./ColorSwatch";

export const BaseColors = () => {
  const [{ baseColors }] = useTheme();
  return (
    <div>
      <Source
        language="ts"
        code={`
      theme.baseColors[key];
      `}
      />
      <AutoGrid minChildWidth="90px" gap="16">
        {Object.keys(baseColors).map((baseColor) => (
          <ColorSwatch
            name={baseColor}
            key={baseColor}
            color={baseColors[baseColor]}
          />
        ))}
      </AutoGrid>
    </div>
  );
};
