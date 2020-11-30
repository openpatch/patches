function SurveyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-survey" viewBox="0 0 24 24" {...props}>
      <path
        d="M5 5h14a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V7c0-1.1.9-2 2-2zm3 7a1 1 0 000 2h8a1 1 0 000-2H8zm0 4a1 1 0 000 2h4a1 1 0 000-2H8z"
        className="primary"
      />
      <path
        d="M15 4a2 2 0 012 2v1a1 1 0 01-1 1H8a1 1 0 01-1-1V6c0-1.1.9-2 2-2 0-1.1.9-2 2-2h2a2 2 0 012 2z"
        className="secondary"
      />
    </svg>
  );
}

export default SurveyIcon;
