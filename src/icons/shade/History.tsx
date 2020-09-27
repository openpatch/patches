import * as React from "react";

function HistoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-history" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.55 6.14l1.16 1.15A1 1 0 017 9H3a1 1 0 01-1-1V4a1 1 0 011.7-.7l1.44 1.42A10 10 0 112 12a1 1 0 012 0 8 8 0 102.55-5.86z"
        className="primary"
      />
      <path
        d="M15.7 14.3a1 1 0 01-1.4 1.4l-3-3a1 1 0 01-.3-.7V7a1 1 0 012 0v4.59l2.7 2.7z"
        className="secondary"
      />
    </svg>
  );
}

export default HistoryIcon;
