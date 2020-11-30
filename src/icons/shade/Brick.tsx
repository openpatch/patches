function BrickIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-brick" viewBox="0 0 24 24" {...props}>
      <path
        d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z"
        className="primary"
      />
      <path d="M21 6l-9 4v12l9-4z" className="secondary" />
    </svg>
  );
}

export default BrickIcon;
