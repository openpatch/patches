function InboxDownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-inbox-download" viewBox="0 0 24 24" {...props}>
      <path
        d="M8 5H5v10h2a2 2 0 012 2c0 1.1.9 2 2 2h2a2 2 0 002-2c0-1.1.9-2 2-2h2V5h-3a1 1 0 010-2h3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h3a1 1 0 110 2z"
        className="primary"
      />
      <path
        d="M11 10.59V4a1 1 0 012 0v6.59l1.3-1.3a1 1 0 011.4 1.42l-3 3a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.42l1.3 1.3z"
        className="secondary"
      />
    </svg>
  );
}

export default InboxDownloadIcon;
