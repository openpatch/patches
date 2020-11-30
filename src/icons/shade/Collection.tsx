function CollectionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-collection" viewBox="0 0 24 24" {...props}>
      <rect width={20} height={12} x={2} y={10} className="primary" rx={2} />
      <path
        d="M20 8H4c0-1.1.9-2 2-2h12a2 2 0 012 2zm-2-4H6c0-1.1.9-2 2-2h8a2 2 0 012 2z"
        className="secondary"
      />
    </svg>
  );
}

export default CollectionIcon;
