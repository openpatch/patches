import { addDecorator, addParameters } from "@storybook/react";

import withTheme from "./utils/theme-decorator";
import { sortStories } from "./utils/story-helpers";
import * as themes from "../src/themes";
import ThemeDecorator from "./utils/theme-decorator";

// Add group and story names to the sort order to explicitly order them.
// Items that are not included in the list are shown below the sorted items.
const SORT_ORDER = {
  Introduction: [
    "Welcome",
    "Getting Started",
    "Design System",
    "Responsive Design",
    "Contributing",
  ],
  Recipes: [],
  Typography: ["Heading", "SubHeading", "Text"],
  Layout: [],
  Components: [],
  Icons: [],
  Hooks: [],
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "base",
    toolbar: {
      icon: "paintbrush",
      // array of plain string values or MenuItem shape (see below)
      items: Object.keys(themes),
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: sortStories(SORT_ORDER),
  },
};

addParameters({
  a11y: {},
  viewport: {
    viewports: {
      mobile: {
        name: "Mobile",
        styles: {
          width: "414px",
          height: "736px",
        },
      },
      tablet: {
        name: "Tablet",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      desktop: {
        name: "Desktop",
        styles: {
          width: "1200px",
          height: "1600px",
        },
      },
    },
  },
});
addDecorator(withTheme);
