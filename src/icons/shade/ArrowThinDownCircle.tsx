function ArrowThinDownCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-arrow-thin-down-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M11 14.59V7a1 1 0 012 0v7.59l2.3-2.3a1 1 0 111.4 1.42l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.42l2.3 2.3z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThinDownCircleIcon;
