import * as React from "react";

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-lock" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 10h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2zm6 6.73V18a1 1 0 002 0v-1.27a2 2 0 10-2 0z"
        className="primary"
      />
      <path
        d="M12 19a1 1 0 001-1v-1.27A2 2 0 0012 13v-3h3V7a3 3 0 00-6 0v3H7V7a5 5 0 1110 0v3h2a2 2 0 012 2v8a2 2 0 01-2 2h-7v-3z"
        className="secondary"
      />
    </svg>
  );
}

export default LockIcon;
