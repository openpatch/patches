function CloseSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-close-square" viewBox="0 0 24 24" {...props}>
      <rect width={18} height={18} x={3} y={3} className="primary" rx={2} />
      <path
        d="M13.41 12l2.83 2.83a1 1 0 01-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 11-1.41-1.41L10.59 12 7.76 9.17a1 1 0 011.41-1.41L12 10.59l2.83-2.83a1 1 0 011.41 1.41L13.41 12z"
        className="secondary"
      />
    </svg>
  );
}

export default CloseSquareIcon;
