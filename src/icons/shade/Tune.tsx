function TuneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-tune" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm11 8a2 2 0 100-4 2 2 0 000 4zm-8 6a2 2 0 100-4 2 2 0 000 4z"
        className="primary"
      />
      <path
        d="M9.73 14H17a1 1 0 010 2H9.73a2 2 0 000-2zm4.54-6a2 2 0 000 2H7a1 1 0 110-2h7.27z"
        className="secondary"
      />
    </svg>
  );
}

export default TuneIcon;
