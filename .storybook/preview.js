import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";

import "../src/styles.css";
import { sortStories } from "./utils/story-helpers";
import ThemeProvider from "../src/ThemeProvider";

// Add group and story names to the sort order to explicitly order them.
// Items that are not included in the list are shown below the sorted items.
const SORT_ORDER = {
  Introduction: [
    "Welcome",
    "Getting Started",
    "Design Principles",
    "Contributing",
  ],
  Typography: ["Heading", "SubHeading", "Text"],
  Layout: [],
  Forms: [],
  Components: [],
  Icons: [],
};

export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: sortStories(SORT_ORDER),
  },
};

addDecorator(withA11y);
addDecorator((story) => <ThemeProvider>{story()}</ThemeProvider>);
