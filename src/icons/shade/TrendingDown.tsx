import * as React from "react";

function TrendingDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-trending-down" viewBox="0 0 24 24" {...props}>
      <path
        d="M3.7 3.3a1 1 0 10-1.4 1.4l6 6a1 1 0 001.4 0L13 7.42l4.3 4.3a1 1 0 001.4-1.42l-5-5a1 1 0 00-1.4 0L9 8.6 3.7 3.3z"
        className="secondary"
      />
      <path
        d="M16.59 17L13 13.41l-3.3 3.3a1 1 0 01-1.4 0l-6-6a1 1 0 011.4-1.42L9 14.6l3.3-3.3a1 1 0 011.4 0l4.3 4.3 2.3-2.3a1 1 0 011.7.7v6a1 1 0 01-1 1h-6a1 1 0 01-.7-1.7l2.29-2.3z"
        className="primary"
      />
    </svg>
  );
}

export default TrendingDownIcon;
