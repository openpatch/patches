function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-home" viewBox="0 0 24 24" {...props}>
      <path
        d="M9 22H5a1 1 0 01-1-1V11l8-8 8 8v10a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 01-1 1zm3-9a2 2 0 100-4 2 2 0 000 4z"
        className="primary"
      />
      <path
        d="M12.01 4.42l-8.3 8.3a1 1 0 11-1.42-1.41l9.02-9.02a1 1 0 011.41 0l8.99 9.02a1 1 0 01-1.42 1.41l-8.28-8.3z"
        className="secondary"
      />
    </svg>
  );
}

export default HomeIcon;
