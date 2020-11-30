function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-package" viewBox="0 0 24 24" {...props}>
      <path d="M3 6l9-4 9 4v12l-9 4-9-4z" className="primary" />
      <path
        d="M21 6v12l-9 4V10l9-4zM9 8.67v3l-3-1.34v-3l9-4 3 1.34-9 4z"
        className="secondary"
      />
    </svg>
  );
}

export default PackageIcon;
