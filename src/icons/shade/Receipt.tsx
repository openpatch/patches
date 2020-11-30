function ReceiptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-receipt" viewBox="0 0 24 24" {...props}>
      <path
        d="M9 18.41l-2.3 2.3a1 1 0 01-1.4 0l-2-2A1 1 0 013 18V5c0-1.1.9-2 2-2h14a2 2 0 012 2v13a1 1 0 01-.3.7l-2 2a1 1 0 01-1.4 0L15 18.42l-2.3 2.3a1 1 0 01-1.4 0L9 18.4z"
        className="primary"
      />
      <path
        d="M7 7h10a1 1 0 010 2H7a1 1 0 110-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2z"
        className="secondary"
      />
    </svg>
  );
}

export default ReceiptIcon;
