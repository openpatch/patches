import * as React from "react";

function CogIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-cog" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 004.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 003.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 000 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 00-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 00-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 00-3.36-3.36 9.94 9.94 0 01-1.17-2.82 2.5 2.5 0 000-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 003.36-3.36zM12 16a4 4 0 100-8 4 4 0 000 8z"
        className="primary"
      />
      <circle cx={12} cy={12} r={2} className="secondary" />
    </svg>
  );
}

export default CogIcon;
