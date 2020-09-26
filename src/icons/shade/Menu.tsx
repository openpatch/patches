import * as React from "react";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-menu" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
        className="secondary"
      />
    </svg>
  );
}

export default MenuIcon;
