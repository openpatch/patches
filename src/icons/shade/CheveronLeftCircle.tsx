function CheveronLeftCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-cheveron-left-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M13.7 15.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 1.4L10.42 12l3.3 3.3z"
        className="secondary"
      />
    </svg>
  );
}

export default CheveronLeftCircleIcon;
