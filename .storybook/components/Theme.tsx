import { Global, jsx, css } from "@emotion/react";
import { Heading } from "@storybook/addon-docs";
import _merge from "lodash/merge";
import { Colors } from "./Colors";
import { Fonts } from "./Fonts";
import { ThemeProvider } from "../../src/ThemeProvider";

export const Theme = () => {
  return (
    <ThemeProvider>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
        `}
      ></Global>
      <Heading>Colors</Heading>
      <Colors />
      <Heading>Fonts</Heading>
      <Fonts />
    </ThemeProvider>
  );
};
