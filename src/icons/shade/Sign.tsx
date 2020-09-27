import * as React from "react";

function SignIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-sign" viewBox="0 0 24 24" {...props}>
      <path
        d="M14 12h5l3 3-3 3h-5v4h-4v-4H4a1 1 0 01-1-1v-4a1 1 0 011-1h6v-1h4v1z"
        className="primary"
      />
      <path
        d="M10 4a2 2 0 114 0h6a1 1 0 011 1v4a1 1 0 01-1 1H5L2 7l3-3h5z"
        className="secondary"
      />
    </svg>
  );
}

export default SignIcon;
