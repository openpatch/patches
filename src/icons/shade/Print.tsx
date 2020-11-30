function PrintIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-print" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 8h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5c0-1.1.9-2 2-2zm1 2a1 1 0 000 2h2a1 1 0 000-2H6z"
        className="secondary"
      />
      <path
        d="M6 14h12v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6zm0-6V4a1 1 0 011-1h10a1 1 0 011 1v4H6z"
        className="primary"
      />
    </svg>
  );
}

export default PrintIcon;
