function OfficeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-office" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 9h15a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8c0-1.1.9-2 2-2zm12 2v3h3v-3h-3zm0 5v3h3v-3h-3zm-5 0v3h3v-3h-3zm0-5v3h3v-3h-3z"
        className="secondary"
      />
      <path
        d="M9 4h1a2 2 0 012 2v13a2 2 0 01-2 2H9v-6H5v6H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1a2 2 0 114 0z"
        className="primary"
      />
    </svg>
  );
}

export default OfficeIcon;
