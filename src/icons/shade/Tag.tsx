function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-tag" viewBox="0 0 24 24" {...props}>
      <path
        d="M2.59 13.41A1.98 1.98 0 012 12V7a5 5 0 015-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 010 2.82l-8 8a2 2 0 01-2.82 0l-8-8zM7 9a2 2 0 100-4 2 2 0 000 4z"
        className="primary"
      />
      <path d="M12 18l6-6-4-4-6 6.01L12 18z" className="secondary" />
    </svg>
  );
}

export default TagIcon;
