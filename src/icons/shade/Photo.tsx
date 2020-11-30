function PhotoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-photo" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2zm9 6a2 2 0 100-4 2 2 0 000 4z"
        className="primary"
      />
      <path
        d="M15.3 12.3a1 1 0 011.4 0l2 2a1 1 0 01.3.7v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 01.3-.7l4-4a1 1 0 011.4 0l3.3 3.29 1.3-1.3z"
        className="secondary"
      />
    </svg>
  );
}

export default PhotoIcon;
