function StopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-stop" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <rect width={7} height={7} x={8.5} y={8.5} className="secondary" rx={1} />
    </svg>
  );
}

export default StopIcon;
