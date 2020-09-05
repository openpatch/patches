import React, { SVGProps } from "react";

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={45}
      height={45}
      stroke="currentColor"
      viewBox="0 0 45 45"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <circle cx="22" cy="22" r="6" stroke="none">
          <animate
            attributeName="r"
            begin="1.5s"
            calcMode="linear"
            dur="3s"
            repeatCount="indefinite"
            values="6;22"
          ></animate>
          <animate
            attributeName="stroke-opacity"
            begin="1.5s"
            calcMode="linear"
            dur="3s"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
          <animate
            attributeName="stroke-width"
            begin="1.5s"
            calcMode="linear"
            dur="3s"
            repeatCount="indefinite"
            values="2;0"
          ></animate>
        </circle>
        <circle cx="22" cy="22" r="6" stroke="none">
          <animate
            attributeName="r"
            begin="3s"
            calcMode="linear"
            dur="3s"
            repeatCount="indefinite"
            values="6;22"
          ></animate>
          <animate
            attributeName="stroke-opacity"
            begin="3s"
            calcMode="linear"
            dur="3s"
            repeatCount="indefinite"
            values="1;0"
          ></animate>
          <animate
            attributeName="stroke-width"
            begin="3s"
            calcMode="linear"
            dur="3s"
            repeatCount="indefinite"
            values="2;0"
          ></animate>
        </circle>
        <circle cx="22" cy="22" r="8">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="linear"
            dur="1.5s"
            repeatCount="indefinite"
            values="6;1;2;3;4;5;6"
          ></animate>
        </circle>
      </g>
    </svg>
  );
}

export default Icon;
