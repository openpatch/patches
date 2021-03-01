import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Box, BoxProps } from "./Box";

export type LoadingDotsProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  textColor?: BoxProps["textColor"];
};

export const LoadingDots = ({
  children,
  size = "medium",
  textColor,
}: LoadingDotsProps) => {
  let width = "0px";
  switch (size) {
    case "small": {
      width = "2px";
      break;
    }
    case "medium": {
      width = "4px";
      break;
    }
    case "large": {
      width = "6px";
      break;
    }
  }
  return (
    <Box
      css={css`
        @keyframes blink {
          /**
     * At the start of the animation the dot
     * has an opacity of .2
     */
          0% {
            opacity: 0.2;
          }
          /**
     * At 20% the dot is fully visible and
     * then fades out slowly
     */
          20% {
            opacity: 1;
          }
          /**
     * Until it reaches an opacity of .2 and
     * the animation can start again
     */
          100% {
            opacity: 0.2;
          }
        }

        & > span {
          /**
     * Use the blink animation, which is defined above
     */
          animation-name: blink;
          /**
     * The animation should take 1.4 seconds
     */
          animation-duration: 1.4s;
          /**
     * It will repeat itself forever
     */
          animation-iteration-count: infinite;
          /**
     * This makes sure that the starting style (opacity: .2)
     * of the animation is applied before the animation starts.
     * Otherwise we would see a short flash or would have
     * to set the default styling of the dots to the same
     * as the animation. Same applies for the ending styles.
     */
          animation-fill-mode: both;
        }

        & > span:nth-of-type(2) {
          /**
     * Starts the animation of the third dot
     * with a delay of .2s, otherwise all dots
     * would animate at the same time
     */
          animation-delay: 0.2s;
        }

        & > span:nth-of-type(3) {
          /**
     * Starts the animation of the third dot
     * with a delay of .4s, otherwise all dots
     * would animate at the same time
     */
          animation-delay: 0.4s;
        }
      `}
      display="inline-flex"
      alignItems="center"
    >
      {children && (
        <Box
          m="none"
          p="none"
          textColor={textColor}
          as="p"
          marginRight="xsmall"
        >
          {children}
        </Box>
      )}
      <Box
        backgroundColor={textColor || "currentColor"}
        borderRadius="full"
        width={width}
        marginRight="xxsmall"
        height={width}
        as="span"
      ></Box>
      <Box
        backgroundColor={textColor || "currentColor"}
        borderRadius="full"
        marginRight="xxsmall"
        width={width}
        height={width}
        as="span"
      ></Box>
      <Box
        backgroundColor={textColor || "currentColor"}
        borderRadius="full"
        width={width}
        height={width}
        as="span"
      ></Box>
    </Box>
  );
};
