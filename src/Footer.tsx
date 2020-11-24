/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/react";
import { Box } from "./Box";

export type FooterProps = {
  links?: {
    href: string;
    label: string;
  }[];
  copyright?: ReactNode;
};

export const Footer = ({ links, copyright = "OpenPatch" }: FooterProps) => {
  return (
    <Box
      as="footer"
      px={["small", "medium", "medium"]}
      py={["xsmall", "small"]}
      backgroundColor="primary.900"
    >
      {links && (
        <Box as="nav" aria-label="footer-menu">
          <ul
            css={(theme) => css`
              list-style: none;
              display: flex;
              align-items: center;
              padding: 0;
              margin-top: 0;
              margin-bottom: ${theme.space.xxsmall};
              flex-wrap: wrap;
              margin-left: -${theme.space.xsmall};
            `}
          >
            {links?.map(({ href, label }) => (
              <li
                key={label}
                css={css`
                  margin: 4px;
                `}
              >
                <Box
                  as="a"
                  fontWeight="semibold"
                  borderRadius="standard"
                  fontSize="small"
                  padding="xsmall"
                  css={(theme) => css`
                    text-decoration: none;

                    :hover {
                      color: ${theme.colors.primary["50"]};
                      background-color: ${theme.colors.primary["800"]};
                    }
                  `}
                  textColor="primary.200"
                  href={href}
                >
                  {label}
                </Box>
              </li>
            ))}
          </ul>
        </Box>
      )}
      {copyright && (
        <Box fontSize="small" textColor="primary.300" fontWeight="semibold">
          &copy; {new Date().getFullYear()} {copyright}
        </Box>
      )}
    </Box>
  );
};
