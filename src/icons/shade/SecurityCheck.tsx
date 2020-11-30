function SecurityCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-security-check" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 4l8-2 8 2v9.06a8 8 0 01-4.42 7.15L12 22l-3.58-1.79A8 8 0 014 13.06V4z"
        className="primary"
      />
      <path
        d="M10.5 12.59l4.3-4.3a1 1 0 011.4 1.42l-5 5a1 1 0 01-1.4 0l-2-2a1 1 0 011.4-1.42l1.3 1.3z"
        className="secondary"
      />
    </svg>
  );
}

export default SecurityCheckIcon;
