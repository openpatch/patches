import * as React from "react";

function DuplicateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-dupicate" viewBox="0 0 24 24" {...props}>
      <rect width={14} height={14} x={3} y={3} className="secondary" rx={2} />
      <rect width={14} height={14} x={7} y={7} className="primary" rx={2} />
    </svg>
  );
}

export default DuplicateIcon;
