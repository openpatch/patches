import * as React from "react";

function CalendarAddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-calendar-add" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 4h14a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"
        className="primary"
      />
      <path
        d="M13 13h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H9a1 1 0 010-2h2v-2a1 1 0 012 0v2zM7 2a1 1 0 011 1v3a1 1 0 11-2 0V3a1 1 0 011-1zm10 0a1 1 0 011 1v3a1 1 0 01-2 0V3a1 1 0 011-1z"
        className="secondary"
      />
    </svg>
  );
}

export default CalendarAddIcon;
