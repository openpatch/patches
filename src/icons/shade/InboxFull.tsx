import * as React from "react";

function InboxFullIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-inbox-full" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v10h2a2 2 0 012 2c0 1.1.9 2 2 2h2a2 2 0 002-2c0-1.1.9-2 2-2h2V5H5z"
        className="primary"
      />
      <path
        d="M8 7h8a1 1 0 010 2H8a1 1 0 110-2zm0 4h8a1 1 0 010 2H8a1 1 0 010-2z"
        className="secondary"
      />
    </svg>
  );
}

export default InboxFullIcon;
