/** @jsx jsx */
import { Fragment, ReactNode, useState, useRef } from "react";
import { jsx, css } from "@emotion/core";
import { Box, BoxProps } from "./Box";
import { Theme } from "./themes/types";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { Menu } from "./icons/outline";
import { X } from "./icons/outline";
import { Text } from "./Text";
import { Avatar } from "./Avatar";
import { useClickOutsideListener } from "./hooks";
import { Logo } from "./Logo";
import { Icon, IconProps } from "./Icon";

type NavLinkProps = {
  active?: boolean;
  label?: string;
  href?: string;
};

type ProfileLinkProps = {
  label?: string;
  href?: string;
  onClick?: BoxProps["onClick"];
};

type TrayIconProps = {
  icon: ReactNode;
  badge?: IconProps["badge"];
  label: string;
  href: string;
};

export const TrayIcon = ({ icon, badge, label, href }: TrayIconProps) => {
  return (
    <Box
      as="a"
      p="xxsmall"
      display="flex"
      alignItems="center"
      borderRadius="standard"
      position="relative"
      css={(theme: Theme) => css`
        :hover {
          background-color: ${theme.colors.primary["800"]};
        }
      `}
      textColor="primary.50"
      aria-label={label}
      title={label}
      href={href}
    >
      <Icon badge={badge} color="currentColor">
        {icon}
      </Icon>
    </Box>
  );
};

export type NavProps = {
  children?: ReactNode;
  logo?: ReactNode;
  tray?: TrayIconProps[];
  links?: NavLinkProps[];
  profileLinks?: ProfileLinkProps[];
  profile: {
    image?: string;
    name: string;
    email: string;
  };
};

export type NavItemProps = {
  children?: string;
  active?: boolean;
  variant?: "primary" | "secondary" | "menu";
  href?: string;
  onClick?: BoxProps["onClick"];
};

const responsiveDisplay = ["none", "block"];

export const NavItem = ({
  active,
  children,
  variant = "primary",
  href,
  onClick,
}: NavItemProps) => {
  let textColor: BoxProps["textColor"] = "primary.50";
  switch (variant) {
    case "primary":
      textColor = "primary.50";
      break;
    case "secondary":
      textColor = "primary.200";
      break;
    case "menu":
      textColor = "primary.600";
      break;
  }
  return (
    <Box
      as="a"
      href={href}
      onClick={onClick}
      cursor="pointer"
      display="inline-block"
      textColor={textColor}
      paddingX="small"
      paddingY="xsmall"
      fontSize="standard"
      fontWeight="semibold"
      borderRadius="medium"
      css={(theme: Theme) => [
        css`
          user-select: none;
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
              color: white;
              background-color: ${theme.colors.primary["700"]};
            }

            :hover {
              background-color: ${theme.colors.primary["700"]};
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
    </Box>
  );
};

type NavMenuButtonProps = {
  open?: boolean;
  onClick?: ButtonBaseProps["onClick"];
};

const NavMenuButton = ({ open, onClick }: NavMenuButtonProps) => {
  return (
    <ButtonBase
      onClick={onClick}
      textColor="primary.50"
      backgroundColor="transparent"
      css={(theme: Theme) => [
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
    </ButtonBase>
  );
};

export const Nav = ({ logo, tray, profile, links, profileLinks }: NavProps) => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useClickOutsideListener(profileMenuRef, () => setProfileOpen(false));

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
                  <Logo color="currentColor" height="40px" width="auto" />
                )}
              </Box>
              <Box display={responsiveDisplay}>
                <Box
                  marginLeft={logo ? ["none", "large", "xlarge"] : "none"}
                  display="flex"
                  alignItems="baseline"
                  css={css`
                    & > :nth-of-type(1) {
                      margin: 0;
                    }

                    & > * {
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
                  & > * {
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
                {
                  <Box position="relative" display={responsiveDisplay}>
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
                            & > * {
                              display: block !important;
                            }
                          `}
                        >
                          {profileLinks?.map((profileLink) => (
                            <NavItem
                              variant="menu"
                              key={profileLink.label}
                              onClick={profileLink.onClick}
                              href={profileLink.href}
                            >
                              {profileLink.label}
                            </NavItem>
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                }
              </Box>
            </Box>
            <Box display={["block", "none"]}>
              <NavMenuButton open={open} onClick={toggleOpen} />
            </Box>
          </Box>
          <Box
            display={[open ? "block" : "none", "none"]}
            position="absolute"
            top="64px"
            right="0"
            left="0"
            overflowY="auto"
            maxHeight="70vh"
            borderBottomLeftRadius={["standard", "none"]}
            backgroundColor="primary.900"
            borderBottomRightRadius={["standard", "none"]}
            zIndex="40"
            px={["small", "medium", "medium"]}
          >
            <Box
              paddingBottom="xsmall"
              css={css`
                & > :nth-of-type(1) {
                  margin-top: 0;
                }
                & > * {
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
                  <Text>{profile.name}</Text>
                  <Text fontSize="xsmall" textColor="primary.200">
                    {profile.email}
                  </Text>
                </Box>
              </Box>
              <Box
                css={css`
                  & > * {
                    display: block !important;
                  }
                `}
              >
                {profileLinks?.map((profileLink) => (
                  <NavItem
                    variant="secondary"
                    key={profileLink.label}
                    onClick={profileLink.onClick}
                    href={profileLink.href}
                  >
                    {profileLink.label}
                  </NavItem>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};
