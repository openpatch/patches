function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-bolt" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M14 10h2a1 1 0 01.81 1.58l-5 7A1 1 0 0110 18v-4H8a1 1 0 01-.81-1.58l5-7A1 1 0 0114 6v4z"
        className="secondary"
      />
    </svg>
  );
}

export default BoltIcon;
