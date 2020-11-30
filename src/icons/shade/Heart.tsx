function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-heart" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M12.88 8.88a3 3 0 114.24 4.24l-4.41 4.42a1 1 0 01-1.42 0l-4.41-4.42a3 3 0 114.24-4.24l.88.88.88-.88z"
        className="secondary"
      />
    </svg>
  );
}

export default HeartIcon;
