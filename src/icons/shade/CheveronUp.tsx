import * as React from "react";

function CheveronUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-cheveron-up" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M8.7 13.7a1 1 0 11-1.4-1.4l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L12 10.42l-3.3 3.3z"
        className="secondary"
      />
    </svg>
  );
}

export default CheveronUpIcon;
