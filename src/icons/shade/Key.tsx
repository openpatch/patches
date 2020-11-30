function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-key" viewBox="0 0 24 24" {...props}>
      <path
        d="M8.23 10.77a7.01 7.01 0 115 5L11 18H9v2H7v2.03H2V17l6.23-6.23zM17 9a2 2 0 100-4 2 2 0 000 4z"
        className="primary"
      />
      <path
        d="M6.2 18.7a1 1 0 11-1.4-1.4l4-4a1 1 0 111.4 1.4l-4 4z"
        className="secondary"
      />
    </svg>
  );
}

export default KeyIcon;
