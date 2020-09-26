import * as React from "react";

function VolumeUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-volume-up" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.59 16H3a1 1 0 01-1-1V9a1 1 0 011-1h3.59l4.7-4.7A1 1 0 0113 4v16a1 1 0 01-1.7.7L6.58 16z"
        className="primary"
      />
      <path
        d="M17.66 6.34a1 1 0 011.41-1.41 10 10 0 010 14.14 1 1 0 01-1.41-1.41 8 8 0 000-11.32zm-2.83 2.83a1 1 0 111.41-1.41 6 6 0 010 8.48 1 1 0 01-1.41-1.41 4 4 0 000-5.66z"
        className="secondary"
      />
    </svg>
  );
}

export default VolumeUpIcon;
