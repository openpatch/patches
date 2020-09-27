import * as React from "react";

function DocumentAddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-document-add" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2z"
        className="primary"
      />
      <path
        d="M13 15h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2v-2a1 1 0 012 0v2zM14 2l6 6h-6z"
        className="secondary"
      />
    </svg>
  );
}

export default DocumentAddIcon;
