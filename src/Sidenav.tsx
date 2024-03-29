import { css } from "@emotion/react";
import { useLinkComponent } from "./hooks";
import { forwardRef } from "react";
import { Box, BoxProps } from "./Box";

type SectionProps = {
  label: string;
  href: string;
  active?: boolean;
  links?: LinkProps[];
};

type LinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

export type SidenavProps = {
  sections: SectionProps[];
  position?: BoxProps["position"];
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, label, active }, ref) => {
    const LinkComponent = useLinkComponent(ref);
    return (
      <li className={active ? "current" : undefined}>
        <LinkComponent href={href}>{label}</LinkComponent>
      </li>
    );
  }
);

const Section = forwardRef<HTMLAnchorElement, SectionProps>((props, ref) => {
  const { label, links, href, active } = props;
  const LinkComponent = useLinkComponent(ref);
  return (
    <li className={active ? "active" : undefined}>
      <LinkComponent href={href}>{label}</LinkComponent>
      <ul>
        {links?.map((l) => (
          <Link key={l.label} {...l} />
        ))}
      </ul>
    </li>
  );
});

export const Sidenav = ({ sections, position = "initial" }: SidenavProps) => {
  return (
    <Box
      position={position}
      css={(theme) => [
        css`
          top: 10px;
          background-color: ${theme.colors.card};
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid ${theme.colors.neutral["100"]};

          ::selection,
          ::marker {
            background: ${theme.colors.primary["500"]};
            color: ${theme.colors.text};
          }
          & li {
            border-top: 1px solid ${theme.colors.neutral["100"]};
            margin-top: -1px;
            position: relative;
            z-index: 1;
          }

          & .top a {
            border-left: 2px solid transparent;
            color: ${theme.colors.neutral["700"]};
            text-decoration: none;
            display: block;
            font-weight: 500;
            padding: 8px 16px;
            transition: background-color 0.05s ease;
          }

          & .top ul a {
            font-size: 14px;
            padding-left: 24px;
          }

          & a:hover {
            background-color: rgba(14, 30, 37, 0.03);
            color: ${theme.colors.text};
            text-decoration: none;
          }

          & ul {
            background: rgba(14, 30, 37, 0.02);
            margin: 0;
            padding: 0;
            display: block;
            list-style: none;
          }

          & .active > a {
            border-left-color: ${theme.colors.primary["500"]};
            color: ${theme.colors.text};
            font-weight: 700;
          }
          & .current > a {
            color: ${theme.colors.text};
          }
        `,
      ]}
      as="nav"
      aria-label="page-menu"
    >
      <ul className="top">
        {sections.map((s) => (
          <Section key={s.label} {...s} />
        ))}
      </ul>
    </Box>
  );
};
