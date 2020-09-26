import * as React from "react";

function ClickTargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-click-target" viewBox="0 0 24 24" {...props}>
      <path
        d="M21.97 12.73c-.25-.22-.56-.4-.92-.54L20 11.8a8 8 0 10-8.2 8.2l.4 1.06c.12.36.3.67.53.92a10 10 0 119.25-9.25zm-10.95 5.19a6 6 0 116.9-6.9l-2.39-.9a4 4 0 10-5.41 5.41l.9 2.39z"
        className="primary"
      />
      <path
        d="M17.96 16.54l3.75 3.75a1 1 0 01-1.42 1.42l-3.75-3.75-.57 2.28a1 1 0 01-1.9.11l-3-8a1 1 0 011.28-1.29l8 3a1 1 0 01-.1 1.91l-2.3.57z"
        className="secondary"
      />
    </svg>
  );
}

export default ClickTargetIcon;
