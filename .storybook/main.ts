const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../src/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-storysource",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-toolbars",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
