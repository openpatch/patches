function VideocamIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-videocam" viewBox="0 0 24 24" {...props}>
      <path
        d="M13.59 12l6.7-6.7A1 1 0 0122 6v12a1 1 0 01-1.7.7L13.58 12z"
        className="secondary"
      />
      <rect width={14} height={14} x={2} y={5} className="primary" rx={2} />
    </svg>
  );
}

export default VideocamIcon;
