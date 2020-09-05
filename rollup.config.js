import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";

const external = ["react", "tailwindcss", "@emotion/core", "twin.macro"];
const extensions = [".js", ".jsx", ".ts", ".tsx"];

const input = {
  index: "src/index.ts",
  "icons-solid": "src/icons/solid/index.ts",
  "icons-outline": "src/icons/outline/index.ts",
  themes: "src/themes/index.ts",
  hooks: "src/hooks/index.ts",
};

const plugins = [
  resolve({
    extensions,
    customResolveOptions: {
      moduleDirectory: "src",
    },
  }),
  commonjs(),
  postcss({
    config: {
      path: "./postcss.config.js",
    },
    extensions: [".css"],
    extract: path.resolve("dist/styles.css"),
    minimize: true,
  }),
  babel({ extensions, include: ["src/**/*"] }),
];

export default {
  input,
  external,
  plugins,
  output: [
    {
      dir: "dist",
      format: "es",
    },
  ],
};
