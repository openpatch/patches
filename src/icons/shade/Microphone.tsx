function MicrophoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-microphone" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 1a4 4 0 014 4v6a4 4 0 11-8 0V5a4 4 0 014-4z"
        className="secondary"
      />
      <path
        d="M13 18.94V21h3a1 1 0 010 2H8a1 1 0 010-2h3v-2.06A8 8 0 014 11a1 1 0 012 0 6 6 0 1012 0 1 1 0 012 0 8 8 0 01-7 7.94z"
        className="primary"
      />
    </svg>
  );
}

export default MicrophoneIcon;
