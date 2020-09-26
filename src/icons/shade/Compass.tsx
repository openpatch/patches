import * as React from "react";

function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="icon-compass" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-8a2 2 0 100-4 2 2 0 000 4z"
        className="primary"
      />
      <path
        d="M13.71 13.03a2 2 0 00-2.75-2.75l5.39-4.03c.92-.7 2.1.48 1.4 1.4l-4.04 5.38zm-.3.38zm-.38.3l-5.38 4.04c-.92.7-2.1-.48-1.4-1.4l4.04-5.38a2 2 0 002.75 2.75zM10.6 10.6z"
        className="secondary"
      />
    </svg>
  );
}

export default CompassIcon;
