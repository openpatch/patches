function TextCursorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-text-cursor" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M12 7.35A3.99 3.99 0 0115 6a1 1 0 010 2 2 2 0 00-2 2v4c0 1.1.9 2 2 2a1 1 0 010 2c-1.2 0-2.27-.52-3-1.35A3.99 3.99 0 019 18a1 1 0 010-2 2 2 0 002-2v-4a2 2 0 00-2-2 1 1 0 110-2c1.2 0 2.27.52 3 1.35z"
        className="secondary"
      />
    </svg>
  );
}

export default TextCursorIcon;
