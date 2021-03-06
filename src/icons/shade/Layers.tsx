function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-layers" viewBox="0 0 24 24" {...props}>
      <path
        d="M2.6 6.09l9-4a1 1 0 01.8 0l9 4a1 1 0 010 1.82l-9 4a1 1 0 01-.8 0l-9-4a1 1 0 010-1.82z"
        className="primary"
      />
      <path
        d="M3.91 10.5l7.68 3.41a1 1 0 00.82 0l7.68-3.41 1.32.59a1 1 0 010 1.82l-9 4a1 1 0 01-.82 0l-9-4a1 1 0 010-1.82l1.32-.59zm0 5l7.68 3.41a1 1 0 00.82 0l7.68-3.41 1.32.59a1 1 0 010 1.82l-9 4a1 1 0 01-.82 0l-9-4a1 1 0 010-1.82l1.32-.59z"
        className="secondary"
      />
    </svg>
  );
}

export default LayersIcon;
