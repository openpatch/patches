function ShoppingBasketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-shopping-basket" viewBox="0 0 24 24" {...props}>
      <path
        d="M21.78 10l-2.81 11.24A1 1 0 0118 22H6a1 1 0 01-.97-.76L2.22 10h19.56zM6.03 15.24l1 4a1 1 0 001.94-.48l-1-4a1 1 0 00-1.94.48zm10-.48l-1 4a1 1 0 001.94.48l1-4a1 1 0 00-1.94-.48zM11 15v4a1 1 0 002 0v-4a1 1 0 00-2 0z"
        className="primary"
      />
      <rect width={20} height={4} x={2} y={8} className="secondary" rx={1} />
      <path
        d="M9.7 9.7a1 1 0 11-1.4-1.4l6-6a1 1 0 011.4 1.4l-6 6z"
        className="primary"
      />
    </svg>
  );
}

export default ShoppingBasketIcon;
