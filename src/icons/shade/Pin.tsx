import * as React from "react";

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-pin" viewBox="0 0 24 24" {...props}>
      <path
        d="M2.24 20.35l6.5-7.5a1 1 0 011.47-.06l1 1a1 1 0 01-.06 1.47l-7.5 6.5c-.93.8-2.22-.48-1.4-1.41z"
        className="secondary"
      />
      <path
        d="M15 15.41V18a1 1 0 01-.3.7l-1 1a1 1 0 01-1.4 0l-8-8a1 1 0 010-1.4l1-1A1 1 0 016 9h2.59L13 4.59V3a1 1 0 011.7-.7l7 7A1 1 0 0121 11h-1.59L15 15.41z"
        className="primary"
      />
    </svg>
  );
}

export default PinIcon;
