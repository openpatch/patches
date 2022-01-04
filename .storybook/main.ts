module.exports = {
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
};
