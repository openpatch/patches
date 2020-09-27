import * as React from "react";

function UserCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-user-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M3.66 17.52A5 5 0 018 15h8a5 5 0 014.34 2.52 10 10 0 01-16.68 0zM12 13a4 4 0 110-8 4 4 0 010 8z"
        className="secondary"
      />
    </svg>
  );
}

export default UserCircleIcon;
