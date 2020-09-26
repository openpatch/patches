import * as React from "react";

function CertificateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-certificate" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 3h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm16 12V7a2 2 0 01-2-2H6a2 2 0 01-2 2v8a2 2 0 012 2h12c0-1.1.9-2 2-2zM8 7h8a1 1 0 010 2H8a1 1 0 110-2z"
        className="primary"
      />
      <path
        d="M11.65 18.23a4 4 0 114.7 0l2.5 3.44-2.23-.18-1.48 1.68-.59-4.2a4.04 4.04 0 01-1.1 0l-.6 4.2-1.47-1.68-2.23.18 2.5-3.44zM14 17a2 2 0 100-4 2 2 0 000 4z"
        className="secondary"
      />
    </svg>
  );
}

export default CertificateIcon;
