import * as React from "react";

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-chat" viewBox="0 0 24 24" {...props}>
      <path
        d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 012 2v15a1 1 0 01-1.7.7L16.58 17H4a2 2 0 01-2-2z"
        className="primary"
      />
      <path
        d="M6 7h12a1 1 0 010 2H6a1 1 0 110-2zm0 4h8a1 1 0 010 2H6a1 1 0 010-2z"
        className="secondary"
      />
    </svg>
  );
}

export default ChatIcon;
