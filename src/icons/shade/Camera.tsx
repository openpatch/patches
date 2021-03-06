function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-camera" viewBox="0 0 24 24" {...props}>
      <path
        d="M6.59 6l2.7-2.7A1 1 0 0110 3h4a1 1 0 01.7.3L17.42 6H20a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.1.9-2 2-2h2.59zM19 10a1 1 0 100-2 1 1 0 000 2zm-7 8a5 5 0 100-10 5 5 0 000 10z"
        className="primary"
      />
      <path d="M12 16a3 3 0 100-6 3 3 0 000 6z" className="secondary" />
    </svg>
  );
}

export default CameraIcon;
