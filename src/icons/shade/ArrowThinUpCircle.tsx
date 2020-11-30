function ArrowThinUpCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-arrow-thin-up-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M13 9.41V17a1 1 0 01-2 0V9.41l-2.3 2.3a1 1 0 11-1.4-1.42l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.42L13 9.4z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThinUpCircleIcon;
