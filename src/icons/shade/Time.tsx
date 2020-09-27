import * as React from "react";

function TimeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-time" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M13 11.59l3.2 3.2a1 1 0 01-1.4 1.42l-3.5-3.5A1 1 0 0111 12V7a1 1 0 012 0v4.59z"
        className="secondary"
      />
    </svg>
  );
}

export default TimeIcon;
