import * as React from "react";

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-trending-up" viewBox="0 0 24 24" {...props}>
      <path
        d="M3.7 20.7a1 1 0 11-1.4-1.4l6-6a1 1 0 011.4 0l3.3 3.29 4.3-4.3a1 1 0 011.4 1.42l-5 5a1 1 0 01-1.4 0L9 15.4l-5.3 5.3z"
        className="primary"
      />
      <path
        d="M16.59 8l-2.3-2.3A1 1 0 0115 4h6a1 1 0 011 1v6a1 1 0 01-1.7.7L18 9.42l-4.3 4.3a1 1 0 01-1.4 0L9 10.4l-5.3 5.3a1 1 0 11-1.4-1.42l6-6a1 1 0 011.4 0l3.3 3.3L16.59 8z"
        className="secondary"
      />
    </svg>
  );
}

export default TrendingUpIcon;
