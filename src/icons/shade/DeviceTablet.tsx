import * as React from "react";

function DeviceTabletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-device-tablet" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2z"
        className="primary"
      />
      <path d="M12 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" className="secondary" />
    </svg>
  );
}

export default DeviceTabletIcon;
