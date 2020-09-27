import * as React from "react";

function DotsVerticalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-dots-vertical" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z"
        className="secondary"
      />
    </svg>
  );
}

export default DotsVerticalIcon;
