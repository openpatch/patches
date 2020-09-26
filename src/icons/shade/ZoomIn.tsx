import * as React from "react";

function ZoomInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-zoom-in" viewBox="0 0 24 24" {...props}>
      <circle cx={10} cy={10} r={7} className="primary" />
      <path
        d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 01-2.12 2.12l-3-3a1.5 1.5 0 01-.44-1.14l-1.1-1.1a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12zm1-7h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H7a1 1 0 010-2h2V7a1 1 0 112 0v2z"
        className="secondary"
      />
    </svg>
  );
}

export default ZoomInIcon;
