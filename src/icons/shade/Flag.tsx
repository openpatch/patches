import * as React from "react";

function FlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-flag" viewBox="0 0 24 24" {...props}>
      <path
        d="M3 15a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 01.7.3L13.42 5H21a1 1 0 01.9 1.45L19.61 11l2.27 4.55A1 1 0 0121 17h-8a1 1 0 01-.7-.3L10.58 15H3z"
        className="primary"
      />
      <rect width={2} height={20} x={2} y={2} className="secondary" rx={1} />
    </svg>
  );
}

export default FlagIcon;
