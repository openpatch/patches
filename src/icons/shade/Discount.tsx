import * as React from "react";

function DiscountIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-discount" viewBox="0 0 24 24" {...props}>
      <path
        d="M10.75 21.19l-.85.28c-1.21.4-2.53-.15-3.1-1.29l-.4-.8a4 4 0 00-1.78-1.77l-.8-.4a2.57 2.57 0 01-1.29-3.1l.28-.86a4 4 0 000-2.5l-.28-.85c-.4-1.21.15-2.53 1.29-3.1l.8-.4a4 4 0 001.77-1.78l.4-.8a2.57 2.57 0 013.1-1.29l.86.28a4 4 0 002.5 0l.85-.28c1.21-.4 2.53.15 3.1 1.29l.4.8a4 4 0 001.78 1.77l.8.4a2.57 2.57 0 011.29 3.1l-.28.86a4 4 0 000 2.5l.28.85c.4 1.21-.15 2.53-1.29 3.1l-.8.4a4 4 0 00-1.77 1.78l-.4.8a2.57 2.57 0 01-3.1 1.29l-.86-.28a4 4 0 00-2.5 0z"
        className="primary"
      />
      <path
        d="M8.7 16.7a1 1 0 11-1.4-1.4l8-8a1 1 0 011.4 1.4l-8 8zm6.8.3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-7-7a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        className="secondary"
      />
    </svg>
  );
}

export default DiscountIcon;
