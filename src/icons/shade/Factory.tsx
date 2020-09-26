import * as React from "react";

function FactoryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-factory" viewBox="0 0 24 24" {...props}>
      <path
        d="M21 21H3a1 1 0 01-1-1.06l1-16A1 1 0 014 3h2a1 1 0 011 .94l.39 6.26 2.9-2.9A1 1 0 0112 8v2.59l3.3-3.3A1 1 0 0117 8v2.59l3.3-3.3A1 1 0 0122 8v12a1 1 0 01-1 1z"
        className="primary"
      />
      <path
        d="M7 13h3v2H7v-2zm5 0h3v2h-3v-2zm5 0h3v2h-3v-2zM7 17h3v2H7v-2zm5 0h3v2h-3v-2zm5 0h3v2h-3v-2z"
        className="secondary"
      />
    </svg>
  );
}

export default FactoryIcon;
