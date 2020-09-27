import * as React from "react";

function StoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-store" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 8h14a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1zm1 2v7h12v-7H6z"
        className="primary"
      />
      <path
        d="M6 12a4 4 0 01-4-4 1 1 0 01.1-.45l2-4A1 1 0 015 3h14a1 1 0 01.9.55l2 4c.06.14.1.3.1.45a4 4 0 01-7 2.65 3.99 3.99 0 01-6 0A3.99 3.99 0 016 12z"
        className="secondary"
      />
    </svg>
  );
}

export default StoreIcon;
