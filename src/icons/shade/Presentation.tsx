function PresentationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-presentation" viewBox="0 0 24 24" {...props}>
      <path
        d="M11 18.62l-6.55 3.27a1 1 0 01-.9-1.78L11 16.38V3a1 1 0 012 0v13.38l7.45 3.73a1 1 0 01-.9 1.78L13 18.62V21a1 1 0 01-2 0v-2.38z"
        className="secondary"
      />
      <path
        d="M21 14a1 1 0 010 2H3a1 1 0 010-2V4a1 1 0 110-2h18a1 1 0 010 2v10z"
        className="primary"
      />
    </svg>
  );
}

export default PresentationIcon;
