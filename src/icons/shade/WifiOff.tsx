function WifiOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-wifi-off" viewBox="0 0 24 24" {...props}>
      <path
        d="M9.37 13.6l1.54 1.55c-.64.18-1.24.52-1.74 1.02a1 1 0 11-1.41-1.41 6 6 0 011.6-1.15zm-2.93-2.92l1.45 1.45c-.55.33-1.07.74-1.55 1.21a1 1 0 01-1.41-1.41c.47-.47.98-.89 1.51-1.25zm6.9-1.6a9.96 9.96 0 015.73 2.85 1 1 0 01-1.41 1.41 8.09 8.09 0 00-.68-.6L13.33 9.1zM3.56 7.83L5 9.25c-.52.37-1.02.8-1.49 1.26a1 1 0 11-1.4-1.4c.46-.48.95-.9 1.46-1.3zm5.9-2.6c4.37-.79 9.05.5 12.43 3.88a1 1 0 11-1.41 1.41 11.97 11.97 0 00-9.22-3.49l-1.8-1.8z"
        className="primary"
      />
      <path
        d="M12 20.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM3.3 4.7a1 1 0 011.4-1.4l16 16a1 1 0 01-1.4 1.4l-16-16z"
        className="secondary"
      />
    </svg>
  );
}

export default WifiOffIcon;
