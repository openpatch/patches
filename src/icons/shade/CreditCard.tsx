function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-credit-card" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 000 2h2a1 1 0 000-2h-2zm-6 0a1 1 0 000 2h2a1 1 0 000-2h-2z"
        className="primary"
      />
      <path d="M2 7h20v4H2z" className="secondary" />
    </svg>
  );
}

export default CreditCardIcon;
