import * as React from "react";

function WidgetAddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-widget-add" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 13h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zm10 0h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zM5 3h4a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2z"
        className="primary"
      />
      <path
        d="M18 6h2a1 1 0 010 2h-2v2a1 1 0 01-2 0V8h-2a1 1 0 010-2h2V4a1 1 0 012 0v2z"
        className="secondary"
      />
    </svg>
  );
}

export default WidgetAddIcon;
