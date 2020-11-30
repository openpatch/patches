function SortAscendingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-sort-ascending" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 13v7a1 1 0 01-2 0v-7h-3a1 1 0 01-.7-1.7l4-4a1 1 0 011.4 0l4 4A1 1 0 0121 13h-3z"
        className="secondary"
      />
      <path
        d="M3 3h13a1 1 0 010 2H3a1 1 0 110-2zm0 4h9a1 1 0 010 2H3a1 1 0 110-2zm0 4h5a1 1 0 010 2H3a1 1 0 010-2z"
        className="primary"
      />
    </svg>
  );
}

export default SortAscendingIcon;
