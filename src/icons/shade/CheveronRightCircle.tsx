function CheveronRightCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-cheveron-right-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M10.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z"
        className="secondary"
      />
    </svg>
  );
}

export default CheveronRightCircleIcon;
