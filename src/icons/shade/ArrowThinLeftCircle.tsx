import * as React from "react";

function ArrowThinLeftCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-arrow-thin-left-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M9.41 11H17a1 1 0 010 2H9.41l2.3 2.3a1 1 0 11-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.42 1.4L9.4 11z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThinLeftCircleIcon;
