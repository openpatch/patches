import * as React from "react";

function ArrowThickLeftCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="icon-arrow-thick-left-circle"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M12 10h5a1 1 0 011 1v2a1 1 0 01-1 1h-5v2a1 1 0 01-1.7.7l-4-4a1 1 0 010-1.4l4-4A1 1 0 0112 8v2z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThickLeftCircleIcon;
