import * as React from "react";

function InterfaceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-interface" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 2h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm0 4v11h16V6H4z"
        className="primary"
      />
      <path
        d="M17.96 16.54l3.75 3.75a1 1 0 01-1.42 1.42l-3.75-3.75-.57 2.28a1 1 0 01-1.9.11l-3-8a1 1 0 011.28-1.29l8 3a1 1 0 01-.1 1.91l-2.3.57z"
        className="secondary"
      />
    </svg>
  );
}

export default InterfaceIcon;
