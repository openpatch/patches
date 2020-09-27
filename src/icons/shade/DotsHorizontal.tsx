import * as React from "react";

function DotsHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-dots-horizontal" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M5 14a2 2 0 110-4 2 2 0 010 4zm7 0a2 2 0 110-4 2 2 0 010 4zm7 0a2 2 0 110-4 2 2 0 010 4z"
        className="secondary"
      />
    </svg>
  );
}

export default DotsHorizontalIcon;
