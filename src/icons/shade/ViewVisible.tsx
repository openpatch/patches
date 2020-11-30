function ViewVisibleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-view-visible" viewBox="0 0 24 24" {...props}>
      <path
        d="M17.56 17.66a8 8 0 01-11.32 0L1.3 12.7a1 1 0 010-1.42l4.95-4.95a8 8 0 0111.32 0l4.95 4.95a1 1 0 010 1.42l-4.95 4.95zM11.9 17a5 5 0 100-10 5 5 0 000 10z"
        className="primary"
      />
      <circle cx={12} cy={12} r={3} className="secondary" />
    </svg>
  );
}

export default ViewVisibleIcon;
