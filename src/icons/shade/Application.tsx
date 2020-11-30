function ApplicationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-application" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 3h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm0 6v10h16V9H4z"
        className="primary"
      />
      <path
        d="M5 7a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2z"
        className="secondary"
      />
    </svg>
  );
}

export default ApplicationIcon;
