const path = require("path");
const toPath = (_path: string) => path.join(process.cwd(), _path);

module.exports = {
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  features: {
    emotionAlias: false,
    babelModeV7: true,
  },
  staticDirs: ["./public"],
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
  webpackFinal: async (config: any) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@codemirror/state": toPath("node_modules/@codemirror/state"),
          "@codemirror/view": toPath("node_modules/@codemirror/view"),
        },
      },
    };
  },
};
