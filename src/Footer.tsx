import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import { Box } from "./Box";

export type FooterProps = {
  links?: {
    href: string;
    label: string;
  }[];
  copyright?: ReactNode;
};

export const Footer = ({ links, copyright = "OpenPatch" }: FooterProps) => {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <Box as="footer" backgroundColor="primary.900">
      <Box
        maxWidth="large"
        mx="auto"
        px={["small", "medium", "medium"]}
        py={["xsmall", "small"]}
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
                  key={href}
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
            &copy; {year} {copyright}
          </Box>
        )}
      </Box>
    </Box>
  );
};
