import { addDecorator, addParameters } from "@storybook/react";

import withTheme from "./utils/theme-decorator";
import { sortStories } from "./utils/story-helpers";

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

addParameters({
  a11y: {},
});
addDecorator(withTheme);
