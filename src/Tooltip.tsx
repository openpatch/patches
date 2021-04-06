import { css } from "@emotion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Box } from "./Box";

export type TooltipProps = {
  children: ReactNode;
  tooltip: ReactNode;
  width?: number;
  position?: "top" | "left" | "right" | "bottom";
};

export const Tooltip = ({
  children,
  tooltip,
  position = "top",
  width = 120,
}: TooltipProps) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (tooltipRef.current) {
      setHeight(tooltipRef.current.clientHeight);
    }
  }, []);

  return (
    <Box
      css={css`
        position: relative;
        display: inline-block;

        &:hover .tooltip {
          opacity: 1;
        }
      `}
    >
      {children}
      <Box
        as="span"
        ref={tooltipRef as any}
        className="tooltip"
        css={(theme) => [
          css`
            width: ${width}px;
            background-color: black;
            color: #fff;
            text-align: center;
            padding: ${theme.space.xsmall} ${theme.space.small};
            border-radius: ${theme.radii.standard};
            opacity: 0;
            transition: opacity 0.3s;

            /* Position the tooltip text - see examples below! */
            position: absolute;
            z-index: 1;
          `,
          position === "bottom" &&
            css`
              top: 150%;
              left: 50%;
              margin-left: -${width / 2}px;

              &::after {
                content: " ";
                position: absolute;
                bottom: 100%; /* At the top of the tooltip */
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent black transparent;
              }
            `,
          position === "right" &&
            css`
              top: -${height / 2 - 10}px;
              left: 110%;

              &::after {
                content: " ";
                position: absolute;
                top: 50%;
                right: 100%; /* To the left of the tooltip */
                margin-top: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent black transparent transparent;
              }
            `,
          position === "left" &&
            css`
              top: -${height / 2 - 10}px;
              right: 110%;
              &::after {
                content: " ";
                position: absolute;
                top: 50%;
                left: 100%;
                margin-top: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent transparent black;
              }
            `,
          position === "top" &&
            css`
              bottom: 150%;
              left: 50%;
              margin-left: -${width / 2}px;
              &::after {
                content: " ";
                position: absolute;
                top: 100%; /* At the bottom of the tooltip */
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: black transparent transparent transparent;
              }
            `,

          height === 0 &&
            css`
              opacity: 0;
            `,
        ]}
      >
        {tooltip}
      </Box>
    </Box>
  );
};
