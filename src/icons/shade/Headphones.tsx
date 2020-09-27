import * as React from "react";

function HeadphonesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-headphones" viewBox="0 0 24 24" {...props}>
      <path
        d="M22 17a1 1 0 01-2 0v-5a8 8 0 10-16 0v5a1 1 0 01-2 0v-5a10 10 0 1120 0v5z"
        className="primary"
      />
      <path
        d="M7 12a2 2 0 012 2v6a2 2 0 11-4 0v-6c0-1.1.9-2 2-2zm10 0a2 2 0 012 2v6a2 2 0 11-4 0v-6c0-1.1.9-2 2-2z"
        className="secondary"
      />
    </svg>
  );
}

export default HeadphonesIcon;
