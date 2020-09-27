import * as React from "react";

function MoodNeutralIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-mood-neutral" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M8 15h8a1 1 0 010 2H8a1 1 0 010-2zm.5-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        className="secondary"
      />
    </svg>
  );
}

export default MoodNeutralIcon;
