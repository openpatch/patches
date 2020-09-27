import * as React from "react";

function NotificationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-notification" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={19} r={3} className="secondary" />
      <path
        d="M10.02 4.28L10 4a2 2 0 113.98.28A7 7 0 0119 11v5a1 1 0 001 1 1 1 0 010 2H4a1 1 0 010-2 1 1 0 001-1v-5a7 7 0 015.02-6.72z"
        className="primary"
      />
    </svg>
  );
}

export default NotificationIcon;
