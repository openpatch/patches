function ShoppingBagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-shopping-bag" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 8h14a1 1 0 011 .92l1 12A1 1 0 0120 22H4a1 1 0 01-1-1.08l1-12A1 1 0 015 8z"
        className="primary"
      />
      <path
        d="M9 10a1 1 0 01-2 0V7a5 5 0 1110 0v3a1 1 0 01-2 0V7a3 3 0 00-6 0v3z"
        className="secondary"
      />
    </svg>
  );
}

export default ShoppingBagIcon;
