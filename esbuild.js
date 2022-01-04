const esbuild = require("esbuild");
const path = require("path");
const pkg = require(path.resolve("./package.json"));

const entryPoints = [
  "src/index.ts",
  "src/themes/index.ts",
  "src/hooks/index.ts",
  "src/icons/shade/index.ts",
  "src/icons/outline/index.ts",
  "src/icons/solid/index.ts",
  "src/system/index.ts",
];

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];

const commonConfig = {
  entryPoints,
  bundle: true,
  outbase: "src",
  outdir: "dist",
  jsxFactory: "jsx",
  inject: ["./emotion-shim.js"],
  sourcemap: true,
  minify: true,
  external
}

esbuild.build({
  ...commonConfig,
  outExtension: {
    ".js": ".esm.mjs"
  },
  format: "esm",
}).catch(() => process.exit(1));

esbuild.build({
  ...commonConfig,
  outExtension: {
    ".js": ".cjs.js"
  },
  format: "cjs",
}).catch(() => process.exit(1));
