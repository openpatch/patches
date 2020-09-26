import * as React from "react";

function ArrowsMergeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-arrows-merge" viewBox="0 0 24 24" {...props}>
      <path
        d="M10 6h4v1.86a8 8 0 002.34 5.65l5.37 5.37a1 1 0 010 1.41l-1.42 1.42a1 1 0 01-1.41 0l-5.37-5.37A12 12 0 0110 7.86V6z"
        className="primary"
      />
      <path
        d="M13.95 9a12 12 0 01-3.46 7.34l-5.37 5.37a1 1 0 01-1.41 0l-1.42-1.42a1 1 0 010-1.41l5.37-5.37A8 8 0 009.92 9H7a1 1 0 01-.7-1.7l5-5a1 1 0 011.4 0l5 5A1 1 0 0117 9h-3.05z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowsMergeIcon;
