function FastForwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-fast-forward" viewBox="0 0 24 24" {...props}>
      <path
        d="M1 5a1 1 0 011.5-.86l12 7a1 1 0 010 1.72l-12 7A1 1 0 011 19V5z"
        className="secondary"
      />
      <path
        d="M9 5a1 1 0 011.5-.86l12 7a1 1 0 010 1.72l-12 7A1 1 0 019 19V5z"
        className="primary"
      />
    </svg>
  );
}

export default FastForwardIcon;
