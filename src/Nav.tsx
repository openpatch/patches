import { css } from "@emotion/react";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { Box } from "./Box";
import { Button, ButtonProps } from "./Button";
import { useClickOutsideListener, useTheme } from "./hooks";
import { Icon, IconProps } from "./Icon";
import { Menu, X } from "./icons/outline";
import { Logo } from "./Logo";
import { Text } from "./Text";
import { TextLink } from "./TextLink";

type NavLinkProps = {
  active?: boolean;
  label?: string;
  href: string;
};

type ProfileLinkProps = {
  label?: string;
  href: string;
};

type ActionLinkProps = {
  label?: string;
  href: string;
  variant?: NavItemProps["variant"];
};

type TrayIconProps = {
  icon: ReactNode;
  badge?: IconProps["badge"];
  label: string;
  href: string;
};

export const TrayIcon = ({ icon, badge, label, href }: TrayIconProps) => {
  return (
    <TextLink
      css={(theme) => css`
        position: relative;
        padding: ${theme.space.xxsmall};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${theme.radii.standard};
        color: ${theme.colors.primary["50"]};
        :hover {
          background-color: ${theme.colors.primary["800"]};
        }
        svg {
          margin-left: 0;
        }
      `}
      aria-label={label}
      title={label}
      href={href}
    >
      <Icon badge={badge} color="currentColor">
        {icon}
      </Icon>
    </TextLink>
  );
};

export type NavProps = {
  children?: ReactNode;
  logo?: ReactNode;
  tray?: TrayIconProps[];
  links?: NavLinkProps[];
  actionLinks?: ActionLinkProps[];
  profileLinks?: ProfileLinkProps[];
  profile?: {
    image?: string;
    username?: string;
    email?: string;
  };
};

export type NavItemProps = {
  children?: string;
  active?: boolean;
  variant?: "primary" | "secondary" | "menu" | "accent";
  href: string;
};

export const NavItem = ({
  active,
  children,
  variant = "primary",
  href,
}: NavItemProps) => {
  const [theme] = useTheme();
  let textColor: string = theme.colors.primary["50"];
  let focusBackgroundColor: string = theme.colors.primary["700"];
  switch (variant) {
    case "primary":
      textColor = theme.colors.primary["50"];
      break;
    case "secondary":
      textColor = theme.colors.primary["200"];
      break;
    case "accent":
      textColor = theme.colors.accent["100"];
      focusBackgroundColor = theme.colors.accent["600"];
      break;
    case "menu":
      textColor = theme.colors.primary["600"];
      break;
  }
  return (
    <TextLink
      href={href}
      css={(theme) => [
        css`
          font-size: ${theme.fontSizes.standard};
          font-weight: ${theme.fontWeights.semibold};
          border-radius: ${theme.radii.medium};
          padding: ${theme.space.xsmall} ${theme.space.small};
          user-select: none;
          min-inline-size: max-content;
          cursor: pointer;
          display: inline-block;
          color: ${textColor};
        `,
        active &&
          css`
            color: white;
            background-color: ${theme.colors.primary["800"]};
          `,
        variant !== "menu" &&
          css`
            text-decoration: none;

            :focus {
              outline: none;
              color: ${textColor};
              background-color: ${focusBackgroundColor};
            }

            :hover {
              background-color: ${focusBackgroundColor};
            }
          `,

        variant === "menu" &&
          css`
            border-radius: 0;
            text-decoration: none;
            :focus {
              color: ${theme.colors.primary["800"]};
            }

            :hover {
              color: ${theme.colors.primary["800"]};
              background-color: ${theme.colors.primary["50"]};
            }
          `,
      ]}
    >
      {children}
    </TextLink>
  );
};

type NavMenuButtonProps = {
  open?: boolean;
  onClick?: ButtonProps["onClick"];
};

const NavMenuButton = ({ open, onClick }: NavMenuButtonProps) => {
  return (
    <Button
      onClick={onClick}
      textColor="primary.50"
      backgroundColor="transparent"
      css={(theme) => [
        css`
          transition: background-color 0.5s ease;
          padding: 6px;
          :focus {
            outline: none;
            color: white;
            background-color: ${theme.colors.primary["700"]};
          }

          :hover {
            background-color: ${theme.colors.primary["700"]};
          }
          svg {
            height: 1.5em;
            width: 1.5em;
          }
        `,
      ]}
    >
      {open ? <X /> : <Menu />}
    </Button>
  );
};

export const Nav = ({
  logo,
  tray,
  profile,
  links,
  profileLinks,
  actionLinks,
}: NavProps) => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);
  const [isOverflown, setIsOverflown] = useState<boolean>(false);

  useClickOutsideListener(profileMenuRef, () => setProfileOpen(false));

  function checkOverflow() {
    if (navItemsRef.current && navItemsRef.current.parentElement) {
      navItemsRef.current.parentElement.style.display = "block";
      const isOverflown =
        navItemsRef.current.offsetWidth < navItemsRef.current.scrollWidth;
      setIsOverflown(isOverflown);
      navItemsRef.current.parentElement.style.display = isOverflown
        ? "none"
        : "block";
    }
  }

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  function toggleOpen() {
    setOpen((o) => !o);
  }

  function toggleProfileOpen() {
    setProfileOpen((o) => !o);
  }

  return (
    <Fragment>
      <Box
        as="nav"
        aria-label="top-menu"
        backgroundColor="primary.900"
        textColor="primary.50"
      >
        <Box maxWidth="large" mx="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="4rem"
            px={["small", "medium", "medium"]}
          >
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center" mr="small">
                {logo ? (
                  logo
                ) : (
                  <Logo color="currentColor" height="40px" width="40px" />
                )}
              </Box>
              <Box display={isOverflown ? "none" : "block"}>
                <Box
                  ref={navItemsRef}
                  overflow="hidden"
                  marginLeft={logo ? ["none", "large", "xlarge"] : "none"}
                  display="flex"
                  alignItems="baseline"
                  css={css`
                    & > :nth-of-type(1) {
                      margin: 0;
                    }

                    & > a {
                      display: inline-block;
                      margin-left: 16px;
                    }
                  `}
                >
                  {links?.map((link) => (
                    <NavItem
                      key={link.label}
                      active={link.active}
                      href={link.href}
                    >
                      {link.label}
                    </NavItem>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                display="flex"
                marginLeft={["none", "xsmall", "small"]}
                alignItems="center"
                marginY="small"
                css={css`
                  & > a,
                  & > div {
                    margin-left: 16px;
                  }
                `}
              >
                {tray?.map(({ badge, icon, label, href }) => (
                  <TrayIcon
                    key={label}
                    badge={badge}
                    icon={icon}
                    href={href}
                    label={label}
                  />
                ))}
                {actionLinks && (
                  <Box
                    position="relative"
                    display={isOverflown ? "none" : "block"}
                  >
                    {actionLinks.map((a) => (
                      <NavItem
                        variant={a.variant || "secondary"}
                        key={a.href}
                        href={a.href}
                      >
                        {a.label}
                      </NavItem>
                    ))}
                  </Box>
                )}
                {profile && (
                  <Box
                    position="relative"
                    display={isOverflown ? "none" : "block"}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      cursor="pointer"
                      id="profile-menu"
                      aria-label="Profile Menu"
                      position="relative"
                      aria-haspopup="true"
                      onClick={toggleProfileOpen}
                    >
                      <Avatar
                        src={profile?.image}
                        placeholder={profile?.image === undefined}
                        username={profile?.username}
                        size="40px"
                      />
                    </Box>
                    {profileOpen && (
                      <Box
                        ref={profileMenuRef}
                        position="absolute"
                        marginTop="xsmall"
                        zIndex="50"
                        css={css`
                          transform-origin: top right;
                          width: 12rem;
                        `}
                        right={0}
                        borderRadius="standard"
                        boxShadow="large"
                      >
                        <Box
                          borderRadius="standard"
                          backgroundColor="card"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu"
                          boxShadow="small"
                          overflow="hidden"
                          css={css`
                            & > a {
                              display: block !important;
                            }
                          `}
                        >
                          {profileLinks?.map((profileLink) => (
                            <NavItem
                              variant="menu"
                              key={profileLink.label}
                              href={profileLink.href}
                            >
                              {profileLink.label}
                            </NavItem>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            </Box>
            <Box display={isOverflown ? "block" : "none"}>
              <NavMenuButton open={open} onClick={toggleOpen} />
            </Box>
          </Box>
          <Box
            display={open && isOverflown ? "block" : "none"}
            position="absolute"
            top="64px"
            right="0"
            left="0"
            overflowY="auto"
            maxHeight="70vh"
            borderBottomLeftRadius={["standard", "none"]}
            backgroundColor="primary.900"
            borderBottomRightRadius={["standard", "none"]}
            boxShadow="standard"
            zIndex="40"
            px={["small", "medium", "medium"]}
          >
            <Box
              paddingBottom="xsmall"
              css={css`
                & > :nth-of-type(1) {
                  margin-top: 0;
                }
                & > a {
                  display: block !important;
                  margin-top: 8px;
                }
              `}
            >
              {links?.map((link) => (
                <NavItem key={link.label} active={link.active} href={link.href}>
                  {link.label}
                </NavItem>
              ))}
            </Box>
            {actionLinks && (
              <Box
                paddingY="small"
                borderTopColor="primary.600"
                borderTopStyle="solid"
                borderTopWidth="light"
              >
                {actionLinks?.map((a) => (
                  <NavItem
                    key={a.href}
                    href={a.href}
                    variant={a.variant || "secondary"}
                  >
                    {a.label}
                  </NavItem>
                ))}
              </Box>
            )}
            {profile && (
              <Box
                borderTopColor="primary.600"
                borderTopStyle="solid"
                borderTopWidth="light"
                paddingY="small"
              >
                <Box display="flex" paddingLeft="small" mb="xxsmall">
                  <Box mr="xsmall">
                    <Avatar
                      src={profile.image}
                      placeholder={profile.image === undefined}
                      size="40px"
                    />
                  </Box>
                  <Box>
                    <Text>{profile.username}</Text>
                    <Text fontSize="xsmall" textColor="primary.200">
                      {profile.email}
                    </Text>
                  </Box>
                </Box>
                <Box
                  css={css`
                    & > a {
                      display: block !important;
                    }
                  `}
                >
                  {profileLinks?.map((profileLink) => (
                    <NavItem
                      variant="secondary"
                      key={profileLink.label}
                      href={profileLink.href}
                    >
                      {profileLink.label}
                    </NavItem>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};
