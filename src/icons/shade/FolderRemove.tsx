import * as React from "react";

function FolderRemoveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-folder-remove" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 4h7l2 2h7a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"
        className="secondary"
      />
      <rect width={20} height={12} x={2} y={8} className="primary" rx={2} />
      <rect width={8} height={2} x={8} y={13} className="secondary" rx={1} />
    </svg>
  );
}

export default FolderRemoveIcon;
