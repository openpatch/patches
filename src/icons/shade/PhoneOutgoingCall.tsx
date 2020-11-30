function PhoneOutgoingCallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-phone-outgoing-call" viewBox="0 0 24 24" {...props}>
      <path
        d="M4 2h4a1 1 0 01.98.8l1 5a1 1 0 01-.27.9l-2.52 2.52a12.05 12.05 0 005.59 5.59l2.51-2.52a1 1 0 01.9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 01-2 2h-2A16 16 0 012 6V4c0-1.1.9-2 2-2z"
        className="primary"
      />
      <path
        d="M14.7 10.7a1 1 0 01-1.4-1.4L17.58 5H15a1 1 0 010-2h5a1 1 0 011 1v5a1 1 0 01-2 0V6.41l-4.3 4.3z"
        className="secondary"
      />
    </svg>
  );
}

export default PhoneOutgoingCallIcon;
