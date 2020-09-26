import * as React from "react";

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-close" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M15.78 14.36a1 1 0 01-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 11-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 011.42-1.42l2.83 2.83 2.82-2.83a1 1 0 011.42 1.42l-2.83 2.83 2.83 2.82z"
        className="secondary"
      />
    </svg>
  );
}

export default CloseIcon;
