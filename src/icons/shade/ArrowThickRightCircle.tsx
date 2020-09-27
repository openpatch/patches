import * as React from "react";

function ArrowThickRightCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="icon-arrow-thick-right-circle"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M12 14H7a1 1 0 01-1-1v-2a1 1 0 011-1h5V8a1 1 0 011.7-.7l4 4a1 1 0 010 1.4l-4 4A1 1 0 0112 16v-2z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThickRightCircleIcon;
