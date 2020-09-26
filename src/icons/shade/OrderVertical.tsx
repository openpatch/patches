import * as React from "react";

function OrderVerticalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-order-vertical" viewBox="0 0 24 24" {...props}>
      <path
        d="M7 18.59V9a1 1 0 012 0v9.59l2.3-2.3a1 1 0 011.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.42L7 18.6z"
        className="secondary"
      />
      <path
        d="M17 5.41V15a1 1 0 11-2 0V5.41l-2.3 2.3a1 1 0 11-1.4-1.42l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.42L17 5.4z"
        className="primary"
      />
    </svg>
  );
}

export default OrderVerticalIcon;
