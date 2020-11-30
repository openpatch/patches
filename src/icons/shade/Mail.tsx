function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-mail" viewBox="0 0 24 24" {...props}>
      <path
        d="M22 8.62V18a2 2 0 01-2 2H4a2 2 0 01-2-2V8.62l9.55 4.77a1 1 0 00.9 0L22 8.62z"
        className="primary"
      />
      <path
        d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 012 2v.38l-10 5z"
        className="secondary"
      />
    </svg>
  );
}

export default MailIcon;
