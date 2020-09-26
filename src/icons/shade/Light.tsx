import * as React from "react";

function LightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-light" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 8a7 7 0 1110.62 6l-.64 3.2a1 1 0 01-.98.8h-4a1 1 0 01-.98-.8L8.38 14A7 7 0 015 8zm12 0a5 5 0 00-5-5 1 1 0 000 2 3 3 0 013 3 1 1 0 002 0z"
        className="primary"
      />
      <path
        d="M15 21a2 2 0 01-2 2h-2a2 2 0 01-2-2 1 1 0 010-2h6a1 1 0 010 2z"
        className="secondary"
      />
    </svg>
  );
}

export default LightIcon;
