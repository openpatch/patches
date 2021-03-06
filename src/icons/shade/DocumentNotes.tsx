function DocumentNotesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-document-notes" viewBox="0 0 24 24" {...props}>
      <path
        d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm2 11a1 1 0 000 2h8a1 1 0 000-2H8zm0 4a1 1 0 000 2h4a1 1 0 000-2H8z"
        className="primary"
      />
      <path d="M14 2l6 6h-6z" className="secondary" />
    </svg>
  );
}

export default DocumentNotesIcon;
