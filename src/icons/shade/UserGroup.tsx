import * as React from "react";

function UserGroupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-user-group" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 13a3 3 0 013-3h4a3 3 0 013 3v3a1 1 0 01-1 1h-8a1 1 0 01-1-1 1 1 0 01-1 1H3a1 1 0 01-1-1v-3a3 3 0 013-3h4a3 3 0 013 3zM7 9a3 3 0 110-6 3 3 0 010 6zm10 0a3 3 0 110-6 3 3 0 010 6z"
        className="primary"
      />
      <path
        d="M12 13a3 3 0 110-6 3 3 0 010 6zm-3 1h6a3 3 0 013 3v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a3 3 0 013-3z"
        className="secondary"
      />
    </svg>
  );
}

export default UserGroupIcon;
