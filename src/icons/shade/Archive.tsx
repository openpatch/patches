import * as React from "react";

function ArchiveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-archive" viewBox="0 0 24 24" {...props}>
      <path
        d="M5.23 3h13.54a2 2 0 011.98 2.22l-1.55 14a2 2 0 01-2 1.78H6.79a2 2 0 01-1.99-1.78l-1.55-14A2 2 0 015.23 3z"
        className="primary"
      />
      <path
        d="M10.59 14l-2.3-2.3a1 1 0 011.42-1.4L12 12.58l2.3-2.3a1 1 0 011.4 1.42L13.42 14l2.3 2.3a1 1 0 01-1.42 1.4L12 15.42l-2.3 2.3a1 1 0 11-1.4-1.42l2.28-2.3zM4 3h16a2 2 0 012 2v1a1 1 0 01-1 1H3a1 1 0 01-1-1V5c0-1.1.9-2 2-2z"
        className="secondary"
      />
    </svg>
  );
}

export default ArchiveIcon;
