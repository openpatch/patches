import * as React from "react";

function InformationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-information" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" className="primary" />
      <path
        d="M11 12a1 1 0 010-2h2a1 1 0 01.96 1.27L12.33 17H13a1 1 0 010 2h-2a1 1 0 01-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        className="secondary"
      />
    </svg>
  );
}

export default InformationIcon;
