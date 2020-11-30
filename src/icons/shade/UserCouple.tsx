function UserCoupleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-user-couple" viewBox="0 0 24 24" {...props}>
      <path
        d="M15 11a4 4 0 110-8 4 4 0 010 8zm7 8a2 2 0 01-2 2H10a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1z"
        className="primary"
      />
      <path
        d="M9 11a4 4 0 110-8 4 4 0 010 8zm7 8a2 2 0 01-2 2H4a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1z"
        className="secondary"
      />
    </svg>
  );
}

export default UserCoupleIcon;
