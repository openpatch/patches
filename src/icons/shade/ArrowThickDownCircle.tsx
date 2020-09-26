import * as React from "react";

function ArrowThickDownCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="icon-arrow-thick-down-circle"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M10 12V7a1 1 0 011-1h2a1 1 0 011 1v5h2a1 1 0 01.7 1.7l-4 4a1 1 0 01-1.4 0l-4-4A1 1 0 018 12h2z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThickDownCircleIcon;
