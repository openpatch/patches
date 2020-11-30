function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-shopping-cart" viewBox="0 0 24 24" {...props}>
      <path
        d="M7 4h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H7a1 1 0 01-1-1V5a1 1 0 011-1z"
        className="primary"
      />
      <path
        d="M17.73 19a2 2 0 11-3.46 0H8.73a2 2 0 11-3.42-.08A3 3 0 015 13.17V4H3a1 1 0 110-2h3a1 1 0 011 1v10h11a1 1 0 010 2H6a1 1 0 000 2h12a1 1 0 010 2h-.27z"
        className="secondary"
      />
    </svg>
  );
}

export default ShoppingCartIcon;
