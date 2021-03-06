function WifiIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-wifi" viewBox="0 0 24 24" {...props}>
      <path
        d="M9.17 16.17a1 1 0 11-1.41-1.41 6 6 0 018.48 0 1 1 0 01-1.41 1.41 4 4 0 00-5.66 0zm-2.83-2.83a1 1 0 01-1.41-1.41 10 10 0 0114.14 0 1 1 0 01-1.41 1.41 8 8 0 00-11.32 0zm-2.83-2.83a1 1 0 11-1.4-1.4 14 14 0 0119.79 0 1 1 0 11-1.41 1.4 12 12 0 00-16.98 0z"
        className="primary"
      />
      <path
        d="M12 20.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        className="secondary"
      />
    </svg>
  );
}

export default WifiIcon;
