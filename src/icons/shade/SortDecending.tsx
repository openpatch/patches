import * as React from "react";

function SortDecendingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-sort-decending" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 11V4a1 1 0 112 0v7h3a1 1 0 01.7 1.7l-4 4a1 1 0 01-1.4 0l-4-4A1 1 0 013 11h3z"
        className="secondary"
      />
      <path
        d="M21 21H8a1 1 0 010-2h13a1 1 0 010 2zm0-4h-9a1 1 0 010-2h9a1 1 0 010 2zm0-4h-5a1 1 0 010-2h5a1 1 0 010 2z"
        className="primary"
      />
    </svg>
  );
}

export default SortDecendingIcon;
