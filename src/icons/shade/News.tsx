function NewsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-news" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm2 3a1 1 0 00-1 1v4a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H7z"
        className="primary"
      />
      <path
        d="M7 14h10a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zm7-8h3a1 1 0 010 2h-3a1 1 0 010-2zm0 4h3a1 1 0 010 2h-3a1 1 0 010-2z"
        className="secondary"
      />
    </svg>
  );
}

export default NewsIcon;
