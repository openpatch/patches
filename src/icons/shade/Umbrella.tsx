function UmbrellaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-umbrella" viewBox="0 0 24 24" {...props}>
      <path
        d="M11 3.05V2a1 1 0 012 0v1.05A10 10 0 0122 13c0 1.33-2 1.33-2 0a2 2 0 10-4 0c0 1.33-2 1.33-2 0a2 2 0 10-4 0c0 1.33-2 1.33-2 0a2 2 0 10-4 0c0 1.33-2 1.33-2 0a10 10 0 019-9.95z"
        className="primary"
      />
      <path
        d="M11 14a1 1 0 012 0v5a3 3 0 01-6 0 1 1 0 012 0 1 1 0 002 0v-5z"
        className="secondary"
      />
    </svg>
  );
}

export default UmbrellaIcon;
