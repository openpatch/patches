function SecurityImportantIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-security-important" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 4l8-2 8 2v9.06a8 8 0 01-4.42 7.15L12 22l-3.58-1.79A8 8 0 014 13.06V4z"
        className="primary"
      />
      <path
        d="M12 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 011-1.1h1a1 1 0 011 1.1l-.5 5z"
        className="secondary"
      />
    </svg>
  );
}

export default SecurityImportantIcon;
