import * as React from "react";

function LockOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-lock-open" viewBox="0 0 24 24" {...props}>
      <path
        d="M11 16.73V18a1 1 0 002 0v-1.27a2 2 0 10-2 0zM5 10h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2z"
        className="primary"
      />
      <path
        d="M12 19a1 1 0 001-1v-1.27A2 2 0 0012 13v-3h7a2 2 0 012 2v8a2 2 0 01-2 2h-7v-3zm5-12a1 1 0 01-2 0 3 3 0 00-6 0v3H7V7a5 5 0 1110 0z"
        className="secondary"
      />
    </svg>
  );
}

export default LockOpenIcon;
