import * as React from "react";

function ArrowThickUpCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-arrow-thick-up-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M14 12v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5H8a1 1 0 01-.7-1.7l4-4a1 1 0 011.4 0l4 4A1 1 0 0116 12h-2z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThickUpCircleIcon;
