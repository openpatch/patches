import { Children, Fragment, ReactNode, useState } from "react";
import { css } from "@emotion/react";
import { Box } from "./Box";
import { Text } from "./Text";

export type GroupProps = {
  label: string;
  id?: string;
  variant?: "horizontal" | "vertical";
  children?: ReactNode;
};

export const Group = ({
  children,
  id,
  label,
  variant = "vertical",
}: GroupProps) => {
  const [genId] = useState(id || Date.now());
  const labelid = `group-${genId}`;
  return (
    <Fragment>
      <Text fontWeight="medium" id={labelid} mb="xsmall">
        {label}
      </Text>
      <Box
        role="group"
        aria-labelledby={labelid}
        css={[
          css`
            ul {
              list-style: none;
              margin-left: 0;
              padding-left: 0em;
              margin-bottom: 0;
              margin-top: 0;
            }
            li {
              margin: 8px 0;
            }

            li:last-of-type {
              margin-bottom: 0;
            }
          `,
          variant === "horizontal" &&
            css`
              ul {
                display: inline-flex;
                align-items: center;
                justify-content: center;
              }
              li {
                display: inline;
                margin: 0px 8px;
              }
            `,
        ]}
      >
        <ul>
          {Children.map(children, (c) => (
            <li>{c}</li>
          ))}
        </ul>
      </Box>
    </Fragment>
  );
};
