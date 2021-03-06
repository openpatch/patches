function ThermostatHalfIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-thermostat-half" viewBox="0 0 24 24" {...props}>
      <path
        d="M17 12.1a7 7 0 11-10 0V5a5 5 0 1110 0v7.1zm-1.43 1.4l-.57-.58V5a3 3 0 00-6 0v7.92l-.57.58a5 5 0 107.14 0z"
        className="primary"
      />
      <path
        d="M11 14.17V10a1 1 0 012 0v4.17a3 3 0 11-2 0z"
        className="secondary"
      />
    </svg>
  );
}

export default ThermostatHalfIcon;
