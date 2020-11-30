function MoodHappyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-mood-happy" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M6.8 14h10.4a1 1 0 01.86 1.5 7 7 0 01-12.12 0A1 1 0 016.8 14zm1.7-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        className="secondary"
      />
    </svg>
  );
}

export default MoodHappyIcon;
