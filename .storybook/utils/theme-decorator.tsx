import React, { useEffect } from "react";
import { Story, StoryContext } from "@storybook/react";
import { Global, css, Theme } from "@emotion/react";
import { ThemeProvider } from "../../src/ThemeProvider";
import * as themes from "../../src/themes";

export default (Story: Story, context?: StoryContext) => {
  const selectedTheme = themes[context.globals.theme] as Theme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
        `}
      ></Global>
      <Story {...context} />
    </ThemeProvider>
  );
};
