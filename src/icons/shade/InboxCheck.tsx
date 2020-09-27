import * as React from "react";

function InboxCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-inbox-check" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v10h2a2 2 0 012 2c0 1.1.9 2 2 2h2a2 2 0 002-2c0-1.1.9-2 2-2h2V5H5z"
        className="primary"
      />
      <path
        d="M11 11.59l3.3-3.3a1 1 0 011.4 1.42l-4 4a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.42l1.3 1.3z"
        className="secondary"
      />
    </svg>
  );
}

export default InboxCheckIcon;
