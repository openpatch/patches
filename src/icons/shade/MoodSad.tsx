import * as React from "react";

function MoodSadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-mood-sad" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M16.47 18H7.53a1 1 0 01-.75-1.67 6.98 6.98 0 0110.44 0 1 1 0 01-.75 1.67zM8.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        className="secondary"
      />
    </svg>
  );
}

export default MoodSadIcon;
