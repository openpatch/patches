function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-server" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 10h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4c0-1.1.9-2 2-2zm2 3a1 1 0 000 2h3a1 1 0 000-2H7z"
        className="primary"
      />
      <rect width={5} height={2} x={6} y={6} className="secondary" rx={1} />
    </svg>
  );
}

export default ServerIcon;
