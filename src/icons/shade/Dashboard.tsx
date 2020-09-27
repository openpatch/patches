import * as React from "react";

function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-dashboard" viewBox="0 0 24 24" {...props}>
      <path
        d="M3 11h2a1 1 0 010 2H3v-2zm3.34-6.07l1.42 1.41a1 1 0 01-1.42 1.42L4.93 6.34l1.41-1.41zM13 3v2a1 1 0 01-2 0V3h2zm6.07 3.34l-1.41 1.42a1 1 0 11-1.42-1.42l1.42-1.41 1.41 1.41zM21 13h-2a1 1 0 010-2h2v2z"
        className="secondary"
      />
      <path
        d="M12 22a10 10 0 110-20 10 10 0 010 20zm-6.93-6h13.86a8 8 0 10-13.86 0z"
        className="primary"
      />
      <path
        d="M11 14.27V9a1 1 0 012 0v5.27a2 2 0 11-2 0z"
        className="secondary"
      />
    </svg>
  );
}

export default DashboardIcon;
