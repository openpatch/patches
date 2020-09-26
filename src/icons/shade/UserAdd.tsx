import * as React from "react";

function UserAddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-user-add" viewBox="0 0 24 24" {...props}>
      <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" className="primary" />
      <path
        d="M17 9V7a1 1 0 012 0v2h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2h-2a1 1 0 010-2h2zm-1 10a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1z"
        className="secondary"
      />
    </svg>
  );
}

export default UserAddIcon;
