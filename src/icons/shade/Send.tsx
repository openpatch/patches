function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-send" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 20.1l-8.6 1.8a1 1 0 01-1.3-1.36l9-18a1 1 0 011.8 0l9 18a1 1 0 01-1.3 1.36L12 20.1z"
        className="primary"
      />
      <path
        d="M12 2c.36 0 .71.18.9.55l9 18a1 1 0 01-1.3 1.36L12 20.1V2z"
        className="secondary"
      />
    </svg>
  );
}

export default SendIcon;
