function CloudsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-clouds" viewBox="0 0 24 24" {...props}>
      <path
        d="M16.85 6.06A3.52 3.52 0 0121 9.5a3.5 3.5 0 01-6.96.5H14a3 3 0 112.85-3.94z"
        className="secondary"
      />
      <path
        d="M5.03 12.12A5.5 5.5 0 0116 11.26 4.5 4.5 0 1117.5 20H6a4 4 0 01-.97-7.88z"
        className="primary"
      />
    </svg>
  );
}

export default CloudsIcon;
