import * as React from "react";

function HardDriveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm8.12 7.47A5 5 0 1017 14V9a1 1 0 00-1.7-.7l-1.18 1.17z"
        className="primary"
      />
      <path
        d="M12 16a2 2 0 110-4 2 2 0 010 4zm6-11a1 1 0 110-2 1 1 0 010 2zM6 5a1 1 0 110-2 1 1 0 010 2zm12 16a1 1 0 110-2 1 1 0 010 2zM6 21a1 1 0 110-2 1 1 0 010 2zM8 6h4a1 1 0 010 2H8a1 1 0 110-2z"
        className="secondary"
      />
    </svg>
  );
}

export default HardDriveIcon;
