import * as React from "react";

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-map" viewBox="0 0 24 24" {...props}>
      <path
        d="M15 18.12L9.45 20.9a1 1 0 01-.9 0l-6-3A1 1 0 012 17V4a1 1 0 011.45-.9L9 5.89l5.55-2.77a1 1 0 01.9 0l6 3A1 1 0 0122 7v13a1 1 0 01-1.45.89L15 18.12z"
        className="primary"
      />
      <path
        d="M9 21V5.88l5.55-2.77A1 1 0 0115 3v15.1l-5.55 2.8A1 1 0 019 21z"
        className="secondary"
      />
    </svg>
  );
}

export default MapIcon;
