function PieChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-pie-chart" viewBox="0 0 24 24" {...props}>
      <path
        d="M14 13h6.78a1 1 0 01.97 1.22A10 10 0 119.78 2.25a1 1 0 011.22.97V10a3 3 0 003 3z"
        className="primary"
      />
      <path
        d="M20.78 11H14a1 1 0 01-1-1V3.22a1 1 0 011.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 01-.97 1.22z"
        className="secondary"
      />
    </svg>
  );
}

export default PieChartIcon;
