function DeliverIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-deliver" viewBox="0 0 24 24" {...props}>
      <path
        d="M20 18a3 3 0 00-6 0 1 1 0 01-1-1V9a1 1 0 011-1h5.33a1 1 0 01.95.68l1.67 5c.03.1.05.21.05.32v3a1 1 0 01-1 1h-1zm-.39-5l-1-3H16v3h3.61zM7 20a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z"
        className="secondary"
      />
      <path
        d="M10 18a3 3 0 00-6 0H3a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 011 1v12h-4z"
        className="primary"
      />
    </svg>
  );
}

export default DeliverIcon;
