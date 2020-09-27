import * as React from "react";

function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-puzzle" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 11V8c0-1.1.9-2 2-2h3a1 1 0 001-1V4a2 2 0 114 0v1a1 1 0 001 1h3a2 2 0 012 2v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a2 2 0 01-2 2h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H8a2 2 0 01-2-2v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1z"
        className="primary"
      />
      <path
        d="M22 17v3a2 2 0 01-2 2h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H8a2 2 0 01-2-2v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1v-.6c.54-.24 1.18-.4 1.97-.4 4 0 4 4 8.02 4 .84 0 1.5-.18 2.06-.45A2 2 0 0020 16h1a1 1 0 011 1z"
        className="secondary"
      />
    </svg>
  );
}

export default PuzzleIcon;
