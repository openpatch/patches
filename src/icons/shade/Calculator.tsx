import * as React from "react";

function CalculatorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-calculator" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm2 3a1 1 0 100 2h8a1 1 0 000-2H8zm0 4a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm-8 4a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2zm-4 4a1 1 0 100 2 1 1 0 000-2zm4 0a1 1 0 100 2 1 1 0 000-2z"
        className="primary"
      />
      <rect width={2} height={6} x={15} y={13} className="secondary" rx={1} />
    </svg>
  );
}

export default CalculatorIcon;
