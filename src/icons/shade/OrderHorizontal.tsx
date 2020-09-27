import * as React from "react";

function OrderHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-order-horizontal" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.59 17H9a1 1 0 010-2h9.59l-2.3-2.3a1 1 0 011.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l2.3-2.3z"
        className="secondary"
      />
      <path
        d="M5.41 7H15a1 1 0 010 2H5.41l2.3 2.3a1 1 0 01-1.42 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.42 1.4L5.4 7z"
        className="primary"
      />
    </svg>
  );
}

export default OrderHorizontalIcon;
