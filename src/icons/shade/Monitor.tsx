import * as React from "react";

function MonitorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-monitor" viewBox="0 0 24 24" {...props}>
      <path
        d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5h3a1 1 0 00.83-.45L10 8.8l5.17 7.75a1 1 0 001.66 0l1.7-2.55H21z"
        className="secondary"
      />
      <path
        d="M21 12h-3a1 1 0 00-.83.45L16 14.2l-5.17-7.75a1 1 0 00-1.66 0L5.47 12H3V5c0-1.1.9-2 2-2h14a2 2 0 012 2v7z"
        className="primary"
      />
    </svg>
  );
}

export default MonitorIcon;
