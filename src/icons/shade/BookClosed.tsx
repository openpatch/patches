import * as React from "react";

function BookClosedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-book-closed" viewBox="0 0 24 24" {...props}>
      <rect width={18} height={18} x={3} y={3} className="primary" rx={2} />
      <path
        d="M7 3h10v11a1 1 0 01-1.45.9L12 13.11l-3.55 1.77A1 1 0 017 14V3z"
        className="secondary"
      />
    </svg>
  );
}

export default BookClosedIcon;
