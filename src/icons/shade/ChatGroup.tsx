import * as React from "react";

function ChatGroupIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-chat-group" viewBox="0 0 24 24" {...props}>
      <path
        d="M20.3 12.04l1.01 3a1 1 0 01-1.26 1.27l-3.01-1a7 7 0 113.27-3.27zM11 10a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z"
        className="primary"
      />
      <path
        d="M15.88 17.8a7 7 0 01-8.92 2.5l-3 1.01a1 1 0 01-1.27-1.26l1-3.01A6.97 6.97 0 015 9.1a9 9 0 0010.88 8.7z"
        className="secondary"
      />
    </svg>
  );
}

export default ChatGroupIcon;
