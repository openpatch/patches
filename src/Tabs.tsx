import { css } from "@emotion/react";
import { ReactNode } from "react";
import {
  Tab as RTab,
  TabList as RTabList,
  TabListProps as RTabListProps,
  TabPanel as RTabPanel,
  TabPanelProps as RTabPanelProps,
  TabProps as RTabProps,
  Tabs as RTabs,
  TabsProps as RTabsProp,
} from "react-tabs";
import { variant } from "styled-system";
import { Box, BoxProps } from "./Box";
import { styled } from "./system";
import { SystemColor, SystemColorNames } from "./system/types";

export type TabProps = {
  children: ReactNode;
} & Omit<RTabProps, "ref">;

export const Tab = ({ children, ...props }: TabProps) => {
  props.selected;
  props.disabled;
  return (
    <RTab
      css={(theme) => [
        css`
          display: inline-block;
          border-bottom: 4px solid transparent;
          opacity: 0.7;
          position: relative;
          list-style: none;
          padding: ${theme.space.xsmall} ${theme.space.small};
          cursor: pointer;
          user-select: none;

          &:focus {
            box-shadow: ${theme.shadows.outline};
          }
        `,
        props.selected &&
          css`
            opacity: 1;
            border-bottom-color: currentColor;
          `,
        props.disabled &&
          css`
            opacity: 0.5;
            cursor: default;
          `,
      ]}
      {...props}
    >
      {children}
    </RTab>
  );
};

Tab.tabsRole = "Tab";

export type TabsProps = RTabsProp;

export const Tabs = RTabs;

export type TabListProps = Omit<RTabListProps, "ref"> & {
  tone?: SystemColorNames;
  inverted?: boolean;
};

export const TabList = styled(RTabList)<TabListProps>(
  (props) => css`
    list-style: none;
    margin-left: 0;
    padding-left: 0;

    margin: 0;
    padding: 0;

    display: block;
    overflow-y: auto;
    width: 100%;
    white-space: nowrap;

    box-shadow: ${props.theme.shadows.standard};
  `,
  variant<
    {
      color: SystemColor;
      backgroundColor: SystemColor;
    },
    SystemColorNames,
    string
  >({
    scale: "tabs",
    prop: "tone",
    variants: {
      primary: {
        backgroundColor: "primary.800",
        color: "primary.50",
      },
      accent: {
        backgroundColor: "accent.800",
        color: "accent.50",
      },
      neutral: {
        backgroundColor: "neutral.800",
        color: "neutral.50",
      },
      success: {
        backgroundColor: "success.800",
        color: "success.50",
      },
      warning: {
        backgroundColor: "warning.800",
        color: "warning.50",
      },
      error: {
        backgroundColor: "error.800",
        color: "error.50",
      },
      info: {
        backgroundColor: "info.800",
        color: "info.50",
      },
    },
  }),
  (props) =>
    props.inverted &&
    variant<
      {
        color: SystemColor;
        backgroundColor: SystemColor;
      },
      SystemColorNames,
      string
    >({
      scale: "tabs.inverted",
      prop: "tone",
      variants: {
        primary: {
          color: "primary.800",
          backgroundColor: "primary.50",
        },
        accent: {
          color: "accent.800",
          backgroundColor: "accent.50",
        },
        neutral: {
          color: "neutral.800",
          backgroundColor: "neutral.50",
        },
        success: {
          color: "success.800",
          backgroundColor: "success.50",
        },
        warning: {
          color: "warning.800",
          backgroundColor: "warning.50",
        },
        error: {
          color: "error.800",
          backgroundColor: "error.50",
        },
        info: {
          color: "info.800",
          backgroundColor: "info.50",
        },
      },
    })
);

TabList.defaultProps = {
  tone: "primary",
};

(TabList as any).tabsRole = "TabList";

export type TabPanelProps = {} & Omit<RTabPanelProps, "ref"> &
  Pick<
    BoxProps,
    | "padding"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
    | "paddingX"
    | "paddingY"
    | "p"
    | "pb"
    | "pl"
    | "pr"
    | "px"
    | "pt"
    | "py"
  >;

export const TabPanel = ({
  children,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  p = "standard",
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  ...props
}: TabPanelProps) => {
  return (
    <RTabPanel
      css={[
        css`
          display: none;
        `,
        props.selected &&
          css`
            display: block;
          `,
      ]}
      {...props}
    >
      <Box
        padding={padding}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingX={paddingX}
        paddingY={paddingY}
        p={p}
        pb={pb}
        pl={pl}
        pr={pr}
        pt={pt}
        px={px}
        py={py}
      >
        {children}
      </Box>
    </RTabPanel>
  );
};

TabPanel.tabsRole = "TabPanel";
