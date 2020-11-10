import * as CSS from "csstype";
export type ResponsiveProp<T> = T | T[];

export type SystemBreakpoints = [
  Exclude<CSS.Properties["width"], undefined>,
  Exclude<CSS.Properties["width"], undefined>
];

export type SystemColorNames =
  | "primary"
  | "accent"
  | "neutral"
  | "success"
  | "warning"
  | "error"
  | "info";
// at the moment I do not know a better way to type the props. Maybe in the
// future, https://github.com/microsoft/TypeScript/pull/40336 can be use.
export type SystemColor =
  | "text"
  | "transparent"
  | "background"
  | "card"
  | "primary.50"
  | "primary.100"
  | "primary.200"
  | "primary.300"
  | "primary.400"
  | "primary.500"
  | "primary.600"
  | "primary.700"
  | "primary.800"
  | "primary.900"
  | "accent.50"
  | "accent.100"
  | "accent.200"
  | "accent.300"
  | "accent.400"
  | "accent.500"
  | "accent.600"
  | "accent.700"
  | "accent.800"
  | "accent.900"
  | "neutral.50"
  | "neutral.100"
  | "neutral.200"
  | "neutral.300"
  | "neutral.400"
  | "neutral.500"
  | "neutral.600"
  | "neutral.700"
  | "neutral.800"
  | "neutral.900"
  | "success.50"
  | "success.100"
  | "success.200"
  | "success.300"
  | "success.400"
  | "success.500"
  | "success.600"
  | "success.700"
  | "success.800"
  | "success.900"
  | "warning.50"
  | "warning.100"
  | "warning.200"
  | "warning.300"
  | "warning.400"
  | "warning.500"
  | "warning.600"
  | "warning.700"
  | "warning.800"
  | "warning.900"
  | "error.50"
  | "error.100"
  | "error.200"
  | "error.300"
  | "error.400"
  | "error.500"
  | "error.600"
  | "error.700"
  | "error.800"
  | "error.900"
  | "info.50"
  | "info.100"
  | "info.200"
  | "info.300"
  | "info.400"
  | "info.500"
  | "info.600"
  | "info.700"
  | "info.800"
  | "info.900";

export type SystemBorderWidths =
  | "standard"
  | "none"
  | "light"
  | "medium"
  | "semibold";

export type SystemRadii =
  | "none"
  | "small"
  | "standard"
  | "medium"
  | "large"
  | "full";

export type SystemShadows =
  | "xsmall"
  | "small"
  | "standard"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "inner"
  | "outline"
  | "none";

export type SystemSpace =
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "none"
  | "standard"
  | "gutter"
  | "auto";

export type SystemFonts = "body" | "heading" | "monospace";

export type SystemFontSizes =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "standard";

export type SystemFontWeights =
  | "hairline"
  | "thin"
  | "light"
  | "standard"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type SystemLineHeights =
  | "none"
  | "tight"
  | "snug"
  | "standard"
  | "relaxed"
  | "loose";

export type SystemLetterSpacings =
  | "tighter"
  | "tight"
  | "standard"
  | "wide"
  | "wider"
  | "widest";

export type SystemZIndices = "auto" | "0" | "10" | "20" | "30" | "40" | "50";

export type SystemCursor =
  | "auto"
  | "default"
  | "pointer"
  | "wait"
  | "text"
  | "move"
  | "not-allowed";

export type SystemSizes = "xsmall" | "small" | "medium" | "large";

export type SystemLayoutElements =
  | "article"
  | "aside"
  | "button"
  | "caption"
  | "cite"
  | "circle"
  | "dd"
  | "div"
  | "dl"
  | "dt"
  | "fieldset"
  | "figcaption"
  | "figure"
  | "footer"
  | "form"
  | "header"
  | "hr"
  | "img"
  | "input"
  | "kbd"
  | "label"
  | "li"
  | "mark"
  | "main"
  | "nav"
  | "ol"
  | "path"
  | "pre"
  | "q"
  | "rect"
  | "s"
  | "svg"
  | "section"
  | "select"
  | "small"
  | "span"
  | "sub"
  | "sup"
  | "table"
  | "tbody"
  | "td"
  | "textarea"
  | "tfoot"
  | "th"
  | "thead"
  | "tr"
  | "ul";

export type SystemTypographyElements =
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "code"
  | "blockquote"
  | "span"
  | "p";

export type SystemElements = SystemTypographyElements | SystemLayoutElements;
