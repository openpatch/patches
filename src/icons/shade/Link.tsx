import * as React from "react";

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-link" viewBox="0 0 24 24" {...props}>
      <path
        d="M19.48 13.03l-.02-.03a1 1 0 111.75-.98A6 6 0 0116 21h-4a6 6 0 110-12h1a1 1 0 010 2h-1a4 4 0 100 8h4a4 4 0 003.48-5.97z"
        className="secondary"
      />
      <path
        d="M4.52 10.97l.02.03a1 1 0 11-1.75.98A6 6 0 018 3h4a6 6 0 110 12h-1a1 1 0 010-2h1a4 4 0 100-8H8a4 4 0 00-3.48 5.97z"
        className="primary"
      />
    </svg>
  );
}

export default LinkIcon;
