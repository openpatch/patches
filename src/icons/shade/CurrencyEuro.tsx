function CurrencyEuroIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-currency-euro" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M7.1 11H13a1 1 0 010 2H7.1a5 5 0 008.44 2.54 1 1 0 011.41 1.41A7 7 0 015.07 13H5a1 1 0 010-2h.07a7 7 0 0111.88-3.95 1 1 0 11-1.41 1.41A5 5 0 007.1 11z"
        className="secondary"
      />
    </svg>
  );
}

export default CurrencyEuroIcon;
