import * as React from "react";

function ViewHiddenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-view-hidden" viewBox="0 0 24 24" {...props}>
      <path
        d="M15.1 19.34a8 8 0 01-8.86-1.68L1.3 12.7a1 1 0 010-1.42L4.18 8.4l2.8 2.8a5 5 0 005.73 5.73l2.4 2.4zM8.84 4.6a8 8 0 018.7 1.74l4.96 4.95a1 1 0 010 1.42l-2.78 2.78-2.87-2.87a5 5 0 00-5.58-5.58L8.85 4.6z"
        className="primary"
      />
      <path
        d="M3.3 4.7l16 16a1 1 0 001.4-1.4l-16-16a1 1 0 00-1.4 1.4z"
        className="secondary"
      />
    </svg>
  );
}

export default ViewHiddenIcon;
