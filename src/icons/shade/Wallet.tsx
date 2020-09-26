import * as React from "react";

function WalletIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-wallet" viewBox="0 0 24 24" {...props}>
      <path
        d="M2 5c0 1.1.9 2 2 2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm16 11a2 2 0 100-4 2 2 0 000 4z"
        className="primary"
      />
      <path d="M4 3h11a2 2 0 012 2v2H4a2 2 0 110-4z" className="secondary" />
    </svg>
  );
}

export default WalletIcon;
