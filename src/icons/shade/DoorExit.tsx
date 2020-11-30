function DoorExitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-door-exit" viewBox="0 0 24 24" {...props}>
      <path
        d="M11 4h3a1 1 0 011 1v3a1 1 0 01-2 0V6h-2v12h2v-2a1 1 0 012 0v3a1 1 0 01-1 1h-3v1a1 1 0 01-1.27.96l-6.98-2A1 1 0 012 19V5a1 1 0 01.75-.97l6.98-2A1 1 0 0111 3v1z"
        className="primary"
      />
      <path
        d="M18.59 11l-1.3-1.3c-.94-.94.47-2.35 1.42-1.4l3 3a1 1 0 010 1.4l-3 3c-.95.95-2.36-.46-1.42-1.4l1.3-1.3H14a1 1 0 010-2h4.59z"
        className="secondary"
      />
    </svg>
  );
}

export default DoorExitIcon;
