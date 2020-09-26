import * as React from "react";

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-code" viewBox="0 0 24 24" {...props}>
      <rect width={18} height={18} x={3} y={3} className="primary" rx={2} />
      <path
        d="M8.7 13.3a1 1 0 01-1.4 1.4l-2-2a1 1 0 010-1.4l2-2a1 1 0 111.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 111.42-1.4l2 2a1 1 0 010 1.4l-2 2a1 1 0 01-1.42-1.4zm-3.32 3.9a1 1 0 01-1.96-.4l2-10a1 1 0 011.96.4l-2 10z"
        className="secondary"
      />
    </svg>
  );
}

export default CodeIcon;
