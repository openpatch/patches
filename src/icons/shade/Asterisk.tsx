import * as React from "react";

function AsteriskIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-asterisk" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M11 10.62V7a1 1 0 012 0v3.62l3.45-1.12a1 1 0 01.61 1.9l-3.44 1.13 2.13 2.93a1 1 0 01-1.62 1.17L12 13.7l-2.13 2.93a1 1 0 11-1.62-1.17l2.13-2.93-3.44-1.12a1 1 0 11.61-1.9l3.45 1.1z"
        className="secondary"
      />
    </svg>
  );
}

export default AsteriskIcon;
