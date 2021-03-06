function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-globe" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M2.05 11A10 10 0 0115 2.46V6a2 2 0 01-2 2h-1v1a2 2 0 01-1 1.73V12h2a2 2 0 012 2v1h2a2 2 0 012 2v2.14A9.97 9.97 0 0112 22v-4h-1a2 2 0 01-2-2v-2a2 2 0 01-2-2v-1H2.05z"
        className="secondary"
      />
    </svg>
  );
}

export default GlobeIcon;
