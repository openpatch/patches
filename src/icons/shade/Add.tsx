function AddIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-add" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M17 11a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4h4z"
        className="secondary"
      />
    </svg>
  );
}

export default AddIcon;
