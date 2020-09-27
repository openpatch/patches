import * as React from "react";

function TicketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-ticket" viewBox="0 0 24 24" {...props}>
      <path
        d="M22 15v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4a3 3 0 000-6V5a1 1 0 011-1h18a1 1 0 011 1v4a3 3 0 000 6z"
        className="primary"
      />
      <path
        d="M9 20H3a1 1 0 01-1-1v-4a3 3 0 000-6V5a1 1 0 011-1h6v16z"
        className="secondary"
      />
    </svg>
  );
}

export default TicketIcon;
