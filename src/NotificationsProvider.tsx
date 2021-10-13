import { css, Global } from "@emotion/react";
import { Fragment, ReactNode } from "react";
import { toast, ToastContainer, ToastContainerProps } from "react-toastify";

export type NotificationsProviderProps = {
  children?: ReactNode;
} & ToastContainerProps;

export const notify = {
  info: toast.info,
  warn: toast.warn,
  success: toast.success,
  error: toast.error,
  dismiss: toast.dismiss,
  isActive: toast.isActive,
  update: toast.update,
  clearWaitingQueue: toast.clearWaitingQueue,
  done: toast.done,
};

export const NotificationsProvider = ({
  children,
  ...props
}: NotificationsProviderProps) => {
  return (
    <Fragment>
      <Global
        styles={(theme) => css`
          :root {
            --toastify-color-light: ${theme.colors.card};
            --toastify-color-dark: ${theme.colors.neutral["900"]};
            --toastify-color-info: ${theme.colors.info["500"]};
            --toastify-color-success: ${theme.colors.success["500"]};
            --toastify-color-warning: ${theme.colors.warning["500"]};
            --toastify-color-error: ${theme.colors.error["500"]};
            --toastify-color-transparent: rgba(255, 255, 255, 0.7);
            --toastify-icon-color-info: var(--toastify-color-info);
            --toastify-icon-color-success: var(--toastify-color-success);
            --toastify-icon-color-warning: var(--toastify-color-warning);
            --toastify-icon-color-error: var(--toastify-color-error);
            --toastify-toast-width: 320px;
            --toastify-toast-background: ${theme.colors.card};
            --toastify-toast-min-height: 64px;
            --toastify-toast-max-height: 800px;
            --toastify-font-family: sans-serif;
            --toastify-z-index: 9999;
            --toastify-text-color-light: ${theme.colors.text};
            --toastify-text-color-dark: ${theme.colors.text};
            --toastify-text-color-info: ${theme.colors.text};
            --toastify-text-color-success: ${theme.colors.text};
            --toastify-text-color-warning: ${theme.colors.text};
            --toastify-text-color-error: ${theme.colors.text};
            --toastify-spinner-color: #616161;
            --toastify-spinner-color-empty-area: #e0e0e0;
            --toastify-color-progress-light: ${theme.colors.accent["500"]};
            --toastify-color-progress-dark: ${theme.colors.accent["500"]};
            --toastify-color-progress-info: var(--toastify-color-info);
            --toastify-color-progress-success: var(--toastify-color-success);
            --toastify-color-progress-warning: var(--toastify-color-warning);
            --toastify-color-progress-error: var(--toastify-color-error);
          }

          .Toastify__toast-container {
            z-index: var(--toastify-z-index);
            -webkit-transform: translate3d(0, 0, var(--toastify-z-index) px);
            position: fixed;
            padding: 4px;
            width: var(--toastify-toast-width);
            box-sizing: border-box;
            color: #fff;
          }
          .Toastify__toast-container--top-left {
            top: 1em;
            left: 1em;
          }
          .Toastify__toast-container--top-center {
            top: 1em;
            left: 50%;
            transform: translateX(-50%);
          }
          .Toastify__toast-container--top-right {
            top: 1em;
            right: 1em;
          }
          .Toastify__toast-container--bottom-left {
            bottom: 1em;
            left: 1em;
          }
          .Toastify__toast-container--bottom-center {
            bottom: 1em;
            left: 50%;
            transform: translateX(-50%);
          }
          .Toastify__toast-container--bottom-right {
            bottom: 1em;
            right: 1em;
          }

          @media only screen and (max-width: 480px) {
            .Toastify__toast-container {
              width: 100vw;
              padding: 0;
              left: 0;
              margin: 0;
            }
            .Toastify__toast-container--top-left,
            .Toastify__toast-container--top-center,
            .Toastify__toast-container--top-right {
              top: 0;
              transform: translateX(0);
            }
            .Toastify__toast-container--bottom-left,
            .Toastify__toast-container--bottom-center,
            .Toastify__toast-container--bottom-right {
              bottom: 0;
              transform: translateX(0);
            }
            .Toastify__toast-container--rtl {
              right: 0;
              left: initial;
            }
          }
          .Toastify__toast {
            position: relative;
            min-height: var(--toastify-toast-min-height);
            box-sizing: border-box;
            margin-bottom: 1rem;
            padding: 8px;
            border-radius: 4px;
            box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1),
              0 2px 15px 0 rgba(0, 0, 0, 0.05);
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            max-height: var(--toastify-toast-max-height);
            overflow: hidden;
            font-family: var(--toastify-font-family);
            cursor: pointer;
            direction: ltr;
          }
          .Toastify__toast--rtl {
            direction: rtl;
          }
          .Toastify__toast-body {
            margin: auto 0;
            -ms-flex: 1 1 auto;
            flex: 1 1 auto;
            padding: 6px;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
          }
          .Toastify__toast-body > div:last-child {
            -ms-flex: 1;
            flex: 1;
          }
          .Toastify__toast-icon {
            -webkit-margin-end: 10px;
            margin-inline-end: 10px;
            width: 20px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            display: -ms-flexbox;
            display: flex;
          }

          .Toastify--animate {
            animation-fill-mode: both;
            animation-duration: 0.7s;
          }

          .Toastify--animate-icon {
            animation-fill-mode: both;
            animation-duration: 0.3s;
          }

          @media only screen and (max-width: 480px) {
            .Toastify__toast {
              margin-bottom: 0;
              border-radius: 0;
            }
          }
          .Toastify__toast-theme--dark {
            background: var(--toastify-color-dark);
            color: var(--toastify-text-color-dark);
          }
          .Toastify__toast-theme--light {
            background: var(--toastify-color-light);
            color: var(--toastify-text-color-light);
          }
          .Toastify__toast-theme--colored.Toastify__toast--default {
            background: var(--toastify-color-light);
            color: var(--toastify-text-color-light);
          }
          .Toastify__toast-theme--colored.Toastify__toast--info {
            color: var(--toastify-text-color-info);
            background: var(--toastify-color-info);
          }
          .Toastify__toast-theme--colored.Toastify__toast--success {
            color: var(--toastify-text-color-success);
            background: var(--toastify-color-success);
          }
          .Toastify__toast-theme--colored.Toastify__toast--warning {
            color: var(--toastify-text-color-warning);
            background: var(--toastify-color-warning);
          }
          .Toastify__toast-theme--colored.Toastify__toast--error {
            color: var(--toastify-text-color-error);
            background: var(--toastify-color-error);
          }

          .Toastify__progress-bar-theme--light {
            background: var(--toastify-color-progress-light);
          }
          .Toastify__progress-bar-theme--dark {
            background: var(--toastify-color-progress-dark);
          }
          .Toastify__progress-bar--info {
            background: var(--toastify-color-progress-info);
          }
          .Toastify__progress-bar--success {
            background: var(--toastify-color-progress-success);
          }
          .Toastify__progress-bar--warning {
            background: var(--toastify-color-progress-warning);
          }
          .Toastify__progress-bar--error {
            background: var(--toastify-color-progress-error);
          }
          .Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
          .Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
          .Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
          .Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
            background: var(--toastify-color-transparent);
          }

          .Toastify__close-button {
            color: #fff;
            background: transparent;
            outline: none;
            border: none;
            padding: 0;
            cursor: pointer;
            opacity: 0.7;
            transition: 0.3s ease;
            -ms-flex-item-align: start;
            align-self: flex-start;
          }
          .Toastify__close-button--light {
            color: #000;
            opacity: 0.3;
          }
          .Toastify__close-button > svg {
            fill: currentColor;
            height: 16px;
            width: 14px;
          }
          .Toastify__close-button:hover,
          .Toastify__close-button:focus {
            opacity: 1;
          }

          @keyframes Toastify__trackProgress {
            0% {
              transform: scaleX(1);
            }
            100% {
              transform: scaleX(0);
            }
          }
          .Toastify__progress-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 5px;
            z-index: var(--toastify-z-index);
            opacity: 0.7;
            transform-origin: left;
          }
          .Toastify__progress-bar--animated {
            animation: Toastify__trackProgress linear 1 forwards;
          }
          .Toastify__progress-bar--controlled {
            transition: transform 0.2s;
          }
          .Toastify__progress-bar--rtl {
            right: 0;
            left: initial;
            transform-origin: right;
          }

          .Toastify__spinner {
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            border: 2px solid;
            border-radius: 100%;
            border-color: var(--toastify-spinner-color-empty-area);
            border-right-color: var(--toastify-spinner-color);
            animation: Toastify__spin 0.65s linear infinite;
          }

          @keyframes Toastify__bounceInRight {
            from,
            60%,
            75%,
            90%,
            to {
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            from {
              opacity: 0;
              transform: translate3d(3000px, 0, 0);
            }
            60% {
              opacity: 1;
              transform: translate3d(-25px, 0, 0);
            }
            75% {
              transform: translate3d(10px, 0, 0);
            }
            90% {
              transform: translate3d(-5px, 0, 0);
            }
            to {
              transform: none;
            }
          }
          @keyframes Toastify__bounceOutRight {
            20% {
              opacity: 1;
              transform: translate3d(-20px, 0, 0);
            }
            to {
              opacity: 0;
              transform: translate3d(2000px, 0, 0);
            }
          }
          @keyframes Toastify__bounceInLeft {
            from,
            60%,
            75%,
            90%,
            to {
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            0% {
              opacity: 0;
              transform: translate3d(-3000px, 0, 0);
            }
            60% {
              opacity: 1;
              transform: translate3d(25px, 0, 0);
            }
            75% {
              transform: translate3d(-10px, 0, 0);
            }
            90% {
              transform: translate3d(5px, 0, 0);
            }
            to {
              transform: none;
            }
          }
          @keyframes Toastify__bounceOutLeft {
            20% {
              opacity: 1;
              transform: translate3d(20px, 0, 0);
            }
            to {
              opacity: 0;
              transform: translate3d(-2000px, 0, 0);
            }
          }
          @keyframes Toastify__bounceInUp {
            from,
            60%,
            75%,
            90%,
            to {
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            from {
              opacity: 0;
              transform: translate3d(0, 3000px, 0);
            }
            60% {
              opacity: 1;
              transform: translate3d(0, -20px, 0);
            }
            75% {
              transform: translate3d(0, 10px, 0);
            }
            90% {
              transform: translate3d(0, -5px, 0);
            }
            to {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes Toastify__bounceOutUp {
            20% {
              transform: translate3d(0, -10px, 0);
            }
            40%,
            45% {
              opacity: 1;
              transform: translate3d(0, 20px, 0);
            }
            to {
              opacity: 0;
              transform: translate3d(0, -2000px, 0);
            }
          }
          @keyframes Toastify__bounceInDown {
            from,
            60%,
            75%,
            90%,
            to {
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            0% {
              opacity: 0;
              transform: translate3d(0, -3000px, 0);
            }
            60% {
              opacity: 1;
              transform: translate3d(0, 25px, 0);
            }
            75% {
              transform: translate3d(0, -10px, 0);
            }
            90% {
              transform: translate3d(0, 5px, 0);
            }
            to {
              transform: none;
            }
          }
          @keyframes Toastify__bounceOutDown {
            20% {
              transform: translate3d(0, 10px, 0);
            }
            40%,
            45% {
              opacity: 1;
              transform: translate3d(0, -20px, 0);
            }
            to {
              opacity: 0;
              transform: translate3d(0, 2000px, 0);
            }
          }
          .Toastify__bounce-enter--top-left,
          .Toastify__bounce-enter--bottom-left {
            animation-name: Toastify__bounceInLeft;
          }
          .Toastify__bounce-enter--top-right,
          .Toastify__bounce-enter--bottom-right {
            animation-name: Toastify__bounceInRight;
          }
          .Toastify__bounce-enter--top-center {
            animation-name: Toastify__bounceInDown;
          }
          .Toastify__bounce-enter--bottom-center {
            animation-name: Toastify__bounceInUp;
          }

          .Toastify__bounce-exit--top-left,
          .Toastify__bounce-exit--bottom-left {
            animation-name: Toastify__bounceOutLeft;
          }
          .Toastify__bounce-exit--top-right,
          .Toastify__bounce-exit--bottom-right {
            animation-name: Toastify__bounceOutRight;
          }
          .Toastify__bounce-exit--top-center {
            animation-name: Toastify__bounceOutUp;
          }
          .Toastify__bounce-exit--bottom-center {
            animation-name: Toastify__bounceOutDown;
          }

          @keyframes Toastify__zoomIn {
            from {
              opacity: 0;
              transform: scale3d(0.3, 0.3, 0.3);
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes Toastify__zoomOut {
            from {
              opacity: 1;
            }
            50% {
              opacity: 0;
              transform: scale3d(0.3, 0.3, 0.3);
            }
            to {
              opacity: 0;
            }
          }
          .Toastify__zoom-enter {
            animation-name: Toastify__zoomIn;
          }

          .Toastify__zoom-exit {
            animation-name: Toastify__zoomOut;
          }

          @keyframes Toastify__flipIn {
            from {
              transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              animation-timing-function: ease-in;
              opacity: 0;
            }
            40% {
              transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              animation-timing-function: ease-in;
            }
            60% {
              transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
              opacity: 1;
            }
            80% {
              transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
            }
            to {
              transform: perspective(400px);
            }
          }
          @keyframes Toastify__flipOut {
            from {
              transform: perspective(400px);
            }
            30% {
              transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
              opacity: 1;
            }
            to {
              transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
              opacity: 0;
            }
          }
          .Toastify__flip-enter {
            animation-name: Toastify__flipIn;
          }

          .Toastify__flip-exit {
            animation-name: Toastify__flipOut;
          }

          @keyframes Toastify__slideInRight {
            from {
              transform: translate3d(110%, 0, 0);
              visibility: visible;
            }
            to {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes Toastify__slideInLeft {
            from {
              transform: translate3d(-110%, 0, 0);
              visibility: visible;
            }
            to {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes Toastify__slideInUp {
            from {
              transform: translate3d(0, 110%, 0);
              visibility: visible;
            }
            to {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes Toastify__slideInDown {
            from {
              transform: translate3d(0, -110%, 0);
              visibility: visible;
            }
            to {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes Toastify__slideOutRight {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              visibility: hidden;
              transform: translate3d(110%, 0, 0);
            }
          }
          @keyframes Toastify__slideOutLeft {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              visibility: hidden;
              transform: translate3d(-110%, 0, 0);
            }
          }
          @keyframes Toastify__slideOutDown {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              visibility: hidden;
              transform: translate3d(0, 500px, 0);
            }
          }
          @keyframes Toastify__slideOutUp {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              visibility: hidden;
              transform: translate3d(0, -500px, 0);
            }
          }
          .Toastify__slide-enter--top-left,
          .Toastify__slide-enter--bottom-left {
            animation-name: Toastify__slideInLeft;
          }
          .Toastify__slide-enter--top-right,
          .Toastify__slide-enter--bottom-right {
            animation-name: Toastify__slideInRight;
          }
          .Toastify__slide-enter--top-center {
            animation-name: Toastify__slideInDown;
          }
          .Toastify__slide-enter--bottom-center {
            animation-name: Toastify__slideInUp;
          }

          .Toastify__slide-exit--top-left,
          .Toastify__slide-exit--bottom-left {
            animation-name: Toastify__slideOutLeft;
          }
          .Toastify__slide-exit--top-right,
          .Toastify__slide-exit--bottom-right {
            animation-name: Toastify__slideOutRight;
          }
          .Toastify__slide-exit--top-center {
            animation-name: Toastify__slideOutUp;
          }
          .Toastify__slide-exit--bottom-center {
            animation-name: Toastify__slideOutDown;
          }

          @keyframes Toastify__spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      />
      <ToastContainer {...props} />
      {children}
    </Fragment>
  );
};