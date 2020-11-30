function LocationPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-location-pin" viewBox="0 0 24 24" {...props}>
      <path
        d="M5.64 16.36a9 9 0 1112.72 0l-5.65 5.66a1 1 0 01-1.42 0l-5.65-5.66zM12 13a3 3 0 100-6 3 3 0 000 6z"
        className="primary"
      />
      <path
        d="M12 1a9 9 0 016.36 15.36l-5.65 5.66a1 1 0 01-.71.3V13a3 3 0 000-6V1z"
        className="secondary"
      />
    </svg>
  );
}

export default LocationPinIcon;
