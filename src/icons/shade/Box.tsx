import * as React from "react";

function BoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-box" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm4 7a1 1 0 000 2h6a1 1 0 000-2H9z"
        className="primary"
      />
      <path
        d="M4 3h16a2 2 0 012 2v1a1 1 0 01-1 1H3a1 1 0 01-1-1V5c0-1.1.9-2 2-2z"
        className="secondary"
      />
    </svg>
  );
}

export default BoxIcon;
