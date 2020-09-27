import * as React from "react";

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-pause" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M9 8h1a1 1 0 011 1v6a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1zm5 0h1a1 1 0 011 1v6a1 1 0 01-1 1h-1a1 1 0 01-1-1V9a1 1 0 011-1z"
        className="secondary"
      />
    </svg>
  );
}

export default PauseIcon;
