function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-trophy" viewBox="0 0 24 24" {...props}>
      <path
        d="M7 4v2H4v4c0 1.1.9 2 2 2h1v2H6a4 4 0 01-4-4V6c0-1.1.9-2 2-2h3zm10 2V4h3a2 2 0 012 2v4a4 4 0 01-4 4h-1v-2h1a2 2 0 002-2V6h-3zm-3 14h2a1 1 0 010 2H8a1 1 0 010-2h2a1 1 0 001-1v-3h2v3a1 1 0 001 1z"
        className="secondary"
      />
      <path
        d="M8 2h8a2 2 0 012 2v7a6 6 0 11-12 0V4c0-1.1.9-2 2-2z"
        className="primary"
      />
    </svg>
  );
}

export default TrophyIcon;
