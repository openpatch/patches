function MoneyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-money" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 14.74a4 4 0 00-8 .26H3a2 2 0 01-2-2V5c0-1.1.9-2 2-2h14a2 2 0 012 2v8a2 2 0 01-1 1.74zM10 12a3 3 0 100-6 3 3 0 000 6z"
        className="secondary"
      />
      <path
        d="M7 9h14a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8c0-1.1.9-2 2-2zm7 9a3 3 0 100-6 3 3 0 000 6z"
        className="primary"
      />
    </svg>
  );
}

export default MoneyIcon;
