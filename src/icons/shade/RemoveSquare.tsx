function RemoveSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-remove-square" viewBox="0 0 24 24" {...props}>
      <rect width={18} height={18} x={3} y={3} className="primary" rx={2} />
      <rect width={12} height={2} x={6} y={11} className="secondary" rx={1} />
    </svg>
  );
}

export default RemoveSquareIcon;
