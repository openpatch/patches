function ImportantIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-important" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" className="primary" />
      <path
        d="M12 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 011-1.1h1a1 1 0 011 1.1l-.5 5z"
        className="secondary"
      />
    </svg>
  );
}

export default ImportantIcon;
