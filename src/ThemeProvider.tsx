import { css, Global, Theme, ThemeProvider as ETP } from "@emotion/react";
import _merge from "lodash/merge.js";
import { ReactNode } from "react";
import { PartialDeep } from "type-fest";
import { baseTheme } from "./themes";
import { Box } from "./Box";

export type ThemeProviderProps = {
  children?: ReactNode;
  theme?: PartialDeep<Theme>;
  standalone?: boolean;
};

export const ThemeProvider = ({
  theme: defaultTheme,
  children,
  standalone = true,
}: ThemeProviderProps) => {
  const theme = _merge({} as Theme, baseTheme, defaultTheme);

  return (
    <ETP theme={theme}>
      {standalone && (
        <Global
          styles={css`
            html {
              background-color: ${theme.colors.background};
            }

            body {
              margin: 0;
              padding: 0;
              position: relative;
            }

            #patches-root {
              min-height: 100vh;
            }
          `}
        />
      )}
      <Box
        id="patches-root"
        css={css`
          display: flex;
          flex-direction: column;
          scroll-behavior: smooth;
          line-height: ${theme.lineHeights.standard};
          -webkit-text-size-adjust: 100%; /* 2 */
          color: ${theme.colors.text};
          letter-spacing: ${theme.letterSpacings.standard};
          font-size: ${theme.fontSizes.standard};
          font-family: ${theme.fonts["body"]};

          h1 {
            font-size: ${theme.fontSizes.xxlarge};
            margin: 0.67em 0;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${theme.fonts.heading};
          }

          hr {
            box-sizing: content-box; /* 1 */
            height: 0; /* 1 */
            overflow: visible; /* 2 */
          }

          pre {
            font-family: ${theme.fonts.monospace}; /* 1 */
            font-size: 1em; /* 2 */
          }

          a {
            background-color: transparent;
          }

          abbr[title] {
            border-bottom: none; /* 1 */
            text-decoration: underline; /* 2 */
            text-decoration: underline dotted; /* 2 */
          }

          b,
          strong {
            font-weight: bolder;
          }

          code,
          kbd,
          samp {
            font-family: ${theme.fonts.monospace}; /* 1 */
            font-size: 1em; /* 2 */
          }
          small {
            font-size: 80%;
          }

          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }

          sub {
            bottom: -0.25em;
          }

          sup {
            top: -0.5em;
          }

          img {
            max-width: 100%;
            border-style: none;
          }

          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            margin: 0; /* 2 */
          }

          button,
          input {
            /* 1 */
            overflow: visible;
          }

          button,
          select {
            /* 1 */
            text-transform: none;
          }

          button,
          [type="button"],
          [type="reset"],
          [type="submit"] {
            -webkit-appearance: button;
          }

          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner {
            border-style: none;
            padding: 0;
          }

          button:-moz-focusring,
          [type="button"]:-moz-focusring,
          [type="reset"]:-moz-focusring,
          [type="submit"]:-moz-focusring {
            outline: 1px dotted ButtonText;
          }

          fieldset {
            padding: 0.35em 0.75em 0.625em;
          }

          legend {
            box-sizing: border-box; /* 1 */
            color: inherit; /* 2 */
            display: table; /* 1 */
            max-width: 100%; /* 1 */
            padding: 0; /* 3 */
            white-space: normal; /* 1 */
          }

          progress {
            vertical-align: baseline;
          }

          textarea {
            overflow: auto;
          }

          [type="checkbox"],
          [type="radio"] {
            box-sizing: border-box; /* 1 */
            padding: 0; /* 2 */
          }

          [type="number"]::-webkit-inner-spin-button,
          [type="number"]::-webkit-outer-spin-button {
            height: auto;
          }

          [type="search"] {
            -webkit-appearance: textfield; /* 1 */
            outline-offset: -2px; /* 2 */
          }

          [type="search"]::-webkit-search-decoration {
            -webkit-appearance: none;
          }

          ::-webkit-file-upload-button {
            -webkit-appearance: button; /* 1 */
            font: inherit; /* 2 */
          }

          details {
            display: block;
          }

          summary {
            display: list-item;
          }

          template {
            display: none;
          }

          [hidden] {
            display: none;
          }
        `}
      >
        {children}
      </Box>
    </ETP>
  );
};
