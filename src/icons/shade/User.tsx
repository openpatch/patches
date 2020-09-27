import * as React from "react";

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-user" viewBox="0 0 24 24" {...props}>
      <path d="M12 12a5 5 0 110-10 5 5 0 010 10z" className="primary" />
      <path
        d="M21 20v-1a5 5 0 00-5-5H8a5 5 0 00-5 5v1c0 1.1.9 2 2 2h14a2 2 0 002-2z"
        className="secondary"
      />
    </svg>
  );
}

export default UserIcon;
