import * as React from "react";

function ThumbsUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-thumbs-up" viewBox="0 0 24 24" {...props}>
      <path
        d="M13 4.8l2.92 6.8a1 1 0 01.08.4v8a2 2 0 01-2 2H8a4.28 4.28 0 01-3.7-2.45L2.07 14.4A1 1 0 012 14v-2a3 3 0 013-3h4V5a3 3 0 013-3 1 1 0 011 1v1.8z"
        className="primary"
      />
      <rect width={4} height={11} x={18} y={11} className="secondary" rx={1} />
    </svg>
  );
}

export default ThumbsUpIcon;
