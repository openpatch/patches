function ArrowThinRightCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="icon-arrow-thin-right-circle"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M14.59 13H7a1 1 0 010-2h7.59l-2.3-2.3a1 1 0 111.42-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.42-1.4l2.3-2.3z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowThinRightCircleIcon;
