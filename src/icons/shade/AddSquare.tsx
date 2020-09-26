import * as React from "react";

function AddSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-add-square" viewBox="0 0 24 24" {...props}>
      <rect width={18} height={18} x={3} y={3} className="primary" rx={2} />
      <path
        d="M13 11h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4z"
        className="secondary"
      />
    </svg>
  );
}

export default AddSquareIcon;
