/** @jsx jsx */
import { ReactNode, MouseEvent, KeyboardEvent } from "react";
import { jsx, css, Theme } from "@emotion/react";
import ReactModal, { Props } from "react-modal";
import { ClassNames } from "@emotion/react";
import { darken, transparentize } from "polished";

import { Card } from "./Card";
import { useBreakpoints, useTheme } from "./hooks";

export type ModalProps = {
  /**
   * Determines if the modal is visible or not.
   */
  open?: boolean;
  onClose?: (event: MouseEvent | KeyboardEvent) => void;
  /**
   * React Modal's accessibility string.
   */
  contentLabel?: string;
  children?: ReactNode;
  /**
   * The element that should be used as root for the
   * React portal used to display the modal. See
   * http://reactcommunity.org/react-modal/accessibility/#app-element
   */
  appElement?: string | HTMLElement;
} & Partial<Props>;

export const TRANSITION_DURATION = 200;
const TOP_MARGIN = "10vh";
const TRANSFORM_Y_FLOATING = "10vh";
const FLOATING_TRANSITION = `${TRANSITION_DURATION}ms ease-in-out`;
const FIXED_TRANSITION = `${TRANSITION_DURATION}ms cubic-bezier(0, 0.37, 0.64, 1)`;

const makeQuery = (breakpoint: string) => {
  return `@media screen and (min-width: ${breakpoint})`;
};

/**
 * Wrapper component for ReactModal. Uses the Card component
 * to wrap content passed as the children prop. Don't forget to set
 * the aria prop when using this.
 * http://reactcommunity.org/react-modal/accessibility/#aria
 */
export const Modal = ({
  open = true,
  onClose = () => {},
  contentLabel = "Modal",
  appElement = "#root",
  children,
  ...props
}: ModalProps) => {
  const [theme] = useTheme();

  // in testing there is not appElement. Therefore, this would throw an error.
  if (process.env.NODE_ENV !== "test") {
    ReactModal.setAppElement(appElement);
  }

  return (
    <ClassNames>
      {({ css }) => {
        // React Modal styles
        // https://reactcommunity.org/react-modal/styles/classes/

        const className = {
          base: css`
            label: modal;
            outline: none;
            bottom: 0;
            max-height: 80vh;
            -webkit-overflow-scrolling: touch;
            overflow-y: auto;
            position: fixed;
            transform: translateY(100%);
            transition: transform ${FIXED_TRANSITION};
            width: 100%;
            width: 100vw;

            ${makeQuery(theme.breakpoints[0].toString())} {
              transition: transform ${FLOATING_TRANSITION},
                opacity ${FLOATING_TRANSITION};
              margin: ${TOP_MARGIN} auto auto;
              max-height: 90vh;
              max-width: 90%;
              min-width: 450px;
              opacity: 0;
              position: relative;
              transform: translateY(${TRANSFORM_Y_FLOATING});
            }
            ${makeQuery(theme.breakpoints[1].toString())} {
              max-width: 720px;
            }
          `,
          afterOpen: css`
            label: modal--after-open;
            transform: translateY(0);

            ${makeQuery(theme.breakpoints[0].toString())} {
              opacity: 1;
              transform: translateY(0);
            }
          `,
          beforeClose: css`
            label: modal--before-close;
            transform: translateY(100%);
            ${makeQuery(theme.breakpoints[0].toString())} {
              opacity: 0;
              transform: translateY(${TRANSFORM_Y_FLOATING});
            }
          `,
        };

        const overlayClassName = {
          base: css`
            label: modal__overlay;
            background: ${transparentize(
              0.8,
              darken(0.8, theme.colors.background)
            )};
            bottom: 0;
            left: 0;
            opacity: 0;
            position: fixed;
            right: 0;
            top: 0;
            transition: opacity 200ms ease-in-out;
            z-index: ${theme.zIndices[50]};
            ${makeQuery(theme.breakpoints[0].toString())} {
              -webkit-overflow-scrolling: touch;
              overflow-y: auto;
            }
          `,
          afterOpen: css`
            label: modal__overlay--after-open;
            opacity: 1;
          `,
          beforeClose: css`
            label: modal__overlay--before-close;
            opacity: 0;
          `,
        };

        const reactModalProps = {
          isOpen: open,
          className,
          overlayClassName,
          htmlOpenClassName: "ReactModal__Html--open",
          shouldCloseOnOverlayClick: true,
          contentLabel,
          onRequestClose: onClose,
          closeTimeoutMS: TRANSITION_DURATION,
          ...props,
        };
        return (
          <ReactModal {...reactModalProps}>
            <Card boxShadow="xlarge">{children}</Card>
          </ReactModal>
        );
      }}
    </ClassNames>
  );
};
