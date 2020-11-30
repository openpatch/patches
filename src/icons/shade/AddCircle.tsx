function AddCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-add-circle" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={10} className="primary" />
      <path
        d="M13 11h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4z"
        className="secondary"
      />
    </svg>
  );
}

export default AddCircleIcon;
