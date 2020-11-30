function ChatGroupAltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-chat-group-alt" viewBox="0 0 24 24" {...props}>
      <rect width={16} height={13} x={2} y={2} className="secondary" rx={2} />
      <path
        d="M6 16V8c0-1.1.9-2 2-2h12a2 2 0 012 2v13a1 1 0 01-1.7.7L16.58 18H8a2 2 0 01-2-2z"
        className="primary"
      />
    </svg>
  );
}

export default ChatGroupAltIcon;
