function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-check" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M10 14.59l6.3-6.3a1 1 0 011.4 1.42l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.42l2.3 2.3z"
        className="secondary"
      />
    </svg>
  );
}

export default CheckIcon;
