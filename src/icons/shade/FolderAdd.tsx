import * as React from "react";

function FolderAddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-folder-add" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 4h7l2 2h7a2 2 0 012 2v5a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"
        className="secondary"
      />
      <rect width={20} height={12} x={2} y={8} className="primary" rx={2} />
      <path
        d="M13 13h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2v-2a1 1 0 012 0v2z"
        className="secondary"
      />
    </svg>
  );
}

export default FolderAddIcon;
