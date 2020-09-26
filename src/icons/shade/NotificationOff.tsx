import * as React from "react";

function NotificationOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-notification-off" viewBox="0 0 24 24" {...props}>
      <path
        d="M11.77 16l3.22 3.23a3 3 0 11-3.22-3.22zM3.29 4.7a1 1 0 011.42-1.4l16 16a1 1 0 01-1.42 1.4l-16-16z"
        className="secondary"
      />
      <path
        d="M8.94 4.7c.35-.17.7-.3 1.08-.42L10 4a2 2 0 113.98.28A7 7 0 0119 11v3.76L8.94 4.7zM5.18 9.42L14.76 19H4a1 1 0 010-2 1 1 0 001-1v-5c0-.54.06-1.07.18-1.58z"
        className="primary"
      />
    </svg>
  );
}

export default NotificationOffIcon;
