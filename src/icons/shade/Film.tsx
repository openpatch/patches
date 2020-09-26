import * as React from "react";

function FilmIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-film" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H4zm0 4v2h2V9H4zm0 4v2h2v-2H4zm0 4v2h2v-2H4zM18 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2z"
        className="primary"
      />
      <path
        d="M9 5h6a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1zm0 8h6a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1v-4a1 1 0 011-1z"
        className="secondary"
      />
    </svg>
  );
}

export default FilmIcon;
