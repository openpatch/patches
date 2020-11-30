function RemoveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-remove" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M17 11a1 1 0 010 2H7a1 1 0 010-2h10z"
        className="secondary"
      />
    </svg>
  );
}

export default RemoveIcon;
