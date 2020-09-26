import * as React from "react";

function SecurityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-security" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 4l8-2 8 2v9.06a8 8 0 01-4.42 7.15L12 22l-3.58-1.79A8 8 0 014 13.06V4z"
        className="primary"
      />
      <path
        d="M6 12V5.56l6-1.5V12H6zm6 7.76V12h6v1.06a6 6 0 01-3.32 5.36L12 19.76z"
        className="secondary"
      />
    </svg>
  );
}

export default SecurityIcon;
