function CloudDownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-cloud-download" viewBox="0 0 24 24" {...props}>
      <path
        d="M15 15v-3a3 3 0 00-6 0v3H6a4 4 0 01-.99-7.88 5.5 5.5 0 0110.86-.82A4.49 4.49 0 0122 10.5a4.5 4.5 0 01-4.5 4.5H15z"
        className="primary"
      />
      <path
        d="M11 18.59V12a1 1 0 012 0v6.59l1.3-1.3a1 1 0 011.4 1.42l-3 3a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.42l1.3 1.3z"
        className="secondary"
      />
    </svg>
  );
}

export default CloudDownloadIcon;
