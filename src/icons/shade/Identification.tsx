function IdentificationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-identification" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm13 3a1 1 0 000 2h2a1 1 0 000-2h-2zm-2 4a1 1 0 000 2h4a1 1 0 000-2h-4zm1 4a1 1 0 000 2h3a1 1 0 000-2h-3z"
        className="primary"
      />
      <path
        d="M8 12a3 3 0 110-6 3 3 0 010 6zm-2 2h4a2 2 0 012 2v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1c0-1.1.9-2 2-2z"
        className="secondary"
      />
    </svg>
  );
}

export default IdentificationIcon;
