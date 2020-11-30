function VolumeMuteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-volume-mute" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.59 16H3a1 1 0 01-1-1V9a1 1 0 011-1h3.59l4.7-4.7A1 1 0 0113 4v16a1 1 0 01-1.7.7L6.58 16z"
        className="primary"
      />
      <path
        d="M17.09 12l-1.8-1.8a1 1 0 111.42-1.4l1.79 1.79 1.8-1.8a1 1 0 011.4 1.42L19.92 12l1.8 1.8a1 1 0 01-1.42 1.4l-1.79-1.79-1.8 1.8a1 1 0 01-1.4-1.42L17.08 12z"
        className="secondary"
      />
    </svg>
  );
}

export default VolumeMuteIcon;
