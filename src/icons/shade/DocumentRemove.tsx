function DocumentRemoveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-document-remove" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2z"
        className="primary"
      />
      <rect width={8} height={2} x={8} y={15} className="secondary" rx={1} />
      <path d="M14 2l6 6h-6z" className="secondary" />
    </svg>
  );
}

export default DocumentRemoveIcon;
