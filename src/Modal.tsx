/** @jsx jsx */
import { ReactNode } from "react";
import { jsx, css } from "@emotion/core";
import { Theme } from "./themes";

import { Card } from "./Card";

export type ModalProps = {
  open?: boolean;
  children?: ReactNode;
};

export const Modal = ({ open = true, children }: ModalProps) => {
  return (
    <div
      css={css`
        display: ${open ? "block" : "none"};
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);

        @keyframes animatetop {
          from {
            top: -300px;
            opacity: 0;
          }
          to {
            top: 0;
            opacity: 1;
          }
        }
      `}
    >
      <div
        css={css`
          position: relative;
          margin: auto;
          padding: 0;
          width: 80%;
          animation-name: animatetop;
          animation-duration: 0.4s;
        `}
      >
        <Card boxShadow="xl" borderRadius="default">
          {children}
        </Card>
      </div>
    </div>
  );
};
