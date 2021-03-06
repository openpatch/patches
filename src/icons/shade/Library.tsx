function LibraryIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-library" viewBox="0 0 24 24" {...props}>
      <path
        d="M3 8h18v1a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm6 3l-1 1v4l1 1H4l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zm5.5 0l-1 1v4l1 1h-5l1-1v-4l-1-1h5zM3 20h18a1 1 0 010 2H3a1 1 0 010-2z"
        className="primary"
      />
      <path
        d="M4 18h16a1 1 0 011 1v1H3v-1a1 1 0 011-1zm8.4-15.91l9 4c1 .43.68 1.91-.4 1.91H3c-1.08 0-1.4-1.48-.4-1.91l9-4a1 1 0 01.8 0z"
        className="secondary"
      />
    </svg>
  );
}

export default LibraryIcon;
