import * as React from "react";

function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-book-open" viewBox="0 0 24 24" {...props}>
      <path
        d="M13.41 20.41a2 2 0 01-2.82 0l-.83-.82A2 2 0 008.34 19H4a1 1 0 01-1-1V4a1 1 0 011-1h4a5 5 0 014 2 5 5 0 014-2h4a1 1 0 011 1v14a1 1 0 01-1 1h-4.34a2 2 0 00-1.42.59l-.83.82z"
        className="primary"
      />
      <path
        d="M12 21V5a5 5 0 014-2h4a1 1 0 011 1v14a1 1 0 01-1 1h-4.34a2 2 0 00-1.42.59l-.83.82A2 2 0 0112 21z"
        className="secondary"
      />
    </svg>
  );
}

export default BookOpenIcon;
