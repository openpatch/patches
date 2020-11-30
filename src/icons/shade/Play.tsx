function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-play" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M15.51 11.14a1 1 0 010 1.72l-5 3A1 1 0 019 15V9a1 1 0 011.51-.86l5 3z"
        className="secondary"
      />
    </svg>
  );
}

export default PlayIcon;
