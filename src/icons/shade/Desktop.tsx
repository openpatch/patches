import * as React from "react";

function DesktopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-desktop" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm0 2v10h16V4H4zm4 16a1 1 0 011-1h6a1 1 0 011 1v.59l.7.7A1 1 0 0116 23H8a1 1 0 01-.7-1.7l.7-.71V20z"
        className="primary"
      />
      <path
        d="M2 14h20v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"
        className="secondary"
      />
    </svg>
  );
}

export default DesktopIcon;
