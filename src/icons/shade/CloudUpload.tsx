function CloudUploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-cloud-upload" viewBox="0 0 24 24" {...props}>
      <path
        d="M18 14.97c0-.76-.3-1.51-.88-2.1l-3-3a3 3 0 00-4.24 0l-3 3A3 3 0 006 15a4 4 0 01-.99-7.88 5.5 5.5 0 0110.86-.82A4.49 4.49 0 0122 10.5a4.5 4.5 0 01-4 4.47z"
        className="primary"
      />
      <path
        d="M11 14.41V21a1 1 0 002 0v-6.59l1.3 1.3a1 1 0 001.4-1.42l-3-3a1 1 0 00-1.4 0l-3 3a1 1 0 001.4 1.42l1.3-1.3z"
        className="secondary"
      />
    </svg>
  );
}

export default CloudUploadIcon;
