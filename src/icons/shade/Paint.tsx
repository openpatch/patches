import * as React from "react";

function PaintIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-paint" viewBox="0 0 24 24" {...props}>
      <path
        d="M13 14a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6a1 1 0 011-1v-1.4a3 3 0 012.35-2.92l5.87-1.3A1 1 0 0020 7.4V7a1 1 0 00-1-1h-1V4h1a3 3 0 013 3v.4a3 3 0 01-2.35 2.92l-5.87 1.3a1 1 0 00-.78.98V14z"
        className="secondary"
      />
      <rect width={17} height={6} x={2} y={2} className="primary" rx={2} />
    </svg>
  );
}

export default PaintIcon;
