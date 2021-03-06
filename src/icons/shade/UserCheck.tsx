function UserCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-user-check" viewBox="0 0 24 24" {...props}>
      <path d="M9 11a4 4 0 110-8 4 4 0 010 8z" className="primary" />
      <path
        d="M16 19a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1zm1-8.41l3.3-3.3a1 1 0 011.4 1.42l-4 4a1 1 0 01-1.4 0l-2-2a1 1 0 111.4-1.42l1.3 1.3z"
        className="secondary"
      />
    </svg>
  );
}

export default UserCheckIcon;
