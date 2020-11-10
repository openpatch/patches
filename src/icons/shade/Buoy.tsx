import * as React from "react";

function BuoyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-buoy" viewBox="0 0 24 24" {...props}>
      <path
        d="M9.08 21.57a10.02 10.02 0 01-6.65-6.65A2 2 0 011 13v-2a2 2 0 011.43-1.92 10.02 10.02 0 016.65-6.65A2 2 0 0111 1h2a2 2 0 011.92 1.43c3.17.97 5.68 3.48 6.65 6.65A2 2 0 0123 11v2a2 2 0 01-1.43 1.92 10.02 10.02 0 01-6.65 6.65A2 2 0 0113 23h-2a2 2 0 01-1.92-1.43zM12 16a4 4 0 100-8 4 4 0 000 8z"
        className="primary"
      />
      <path
        d="M7.53 3.05a9.96 9.96 0 018.94 0L13.8 8.42a3.98 3.98 0 00-3.58 0L7.53 3.05zM3.05 16.47a9.96 9.96 0 010-8.94l5.37 2.68a3.98 3.98 0 000 3.58l-5.37 2.68zm4.48 4.48l2.68-5.37a3.98 3.98 0 003.58 0l2.68 5.37a9.96 9.96 0 01-8.94 0zM20.95 7.53a9.96 9.96 0 010 8.94l-5.37-2.68a3.98 3.98 0 000-3.58l5.37-2.68z"
        className="secondary"
      />
    </svg>
  );
}

export default BuoyIcon;