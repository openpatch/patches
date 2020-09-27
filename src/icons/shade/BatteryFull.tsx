import * as React from "react";

function BatteryFullIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-battery-full" viewBox="0 0 24 24" {...props}>
      <path
        d="M20 9h1a1 1 0 011 1v4a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.1.9-2 2-2h14a2 2 0 012 2v1zM4 8v8h14V8H4z"
        className="primary"
      />
      <path d="M6 10h10v4H6z" className="secondary" />
    </svg>
  );
}

export default BatteryFullIcon;
