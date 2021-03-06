function RefreshIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-refresh" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M8.52 7.11a5.98 5.98 0 018.98 2.5 1 1 0 11-1.83.8 4 4 0 00-5.7-1.86l.74.74A1 1 0 0110 11H7a1 1 0 01-1-1V7a1 1 0 011.7-.7l.82.81zm5.51 8.34l-.74-.74A1 1 0 0114 13h3a1 1 0 011 1v3a1 1 0 01-1.7.7l-.82-.81A5.98 5.98 0 016.5 14.4a1 1 0 111.83-.8 4 4 0 005.7 1.85z"
        className="secondary"
      />
    </svg>
  );
}

export default RefreshIcon;
