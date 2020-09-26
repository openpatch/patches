import * as React from "react";

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-trash" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 5h14l-.89 15.12a2 2 0 01-2 1.88H7.9a2 2 0 01-2-1.88L5 5zm5 5a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v6a1 1 0 002 0v-6a1 1 0 00-1-1z"
        className="primary"
      />
      <path
        d="M8.59 4l1.7-1.7A1 1 0 0111 2h2a1 1 0 01.7.3L15.42 4H19a1 1 0 010 2H5a1 1 0 110-2h3.59z"
        className="secondary"
      />
    </svg>
  );
}

export default TrashIcon;
