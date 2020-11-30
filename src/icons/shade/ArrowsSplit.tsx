function ArrowsSplitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-arrows-split" viewBox="0 0 24 24" {...props}>
      <path
        d="M18.7 8.12l-2.36 2.37A8 8 0 0014 16.14V21a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4.86a12 12 0 013.51-8.48l2.37-2.37-1.59-1.58A1 1 0 0115 2h6a1 1 0 011 1v6a1 1 0 01-1.7.7l-1.6-1.58z"
        className="primary"
      />
      <path
        d="M8.12 5.3l2.37 2.36A12 12 0 0114 16.14V21a1 1 0 01-1 1h-2a1 1 0 01-1-1v-4.86a8 8 0 00-2.34-5.65L5.29 8.12 3.71 9.71A1 1 0 012 9V3a1 1 0 011-1h6a1 1 0 01.7 1.7L8.13 5.3z"
        className="secondary"
      />
    </svg>
  );
}

export default ArrowsSplitIcon;
