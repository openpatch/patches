function RemoveCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-remove-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <rect width={12} height={2} x={6} y={11} className="secondary" rx={1} />
    </svg>
  );
}

export default RemoveCircleIcon;
