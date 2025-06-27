import React from 'react';

const DottedBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* SVG pattern for animated dotted background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotPattern"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="15"
              cy="15"
              r="1.5"
              fill="rgba(255, 255, 255, 0.15)"
            />
          </pattern>
          <animateTransform
            xlinkHref="#dotPattern"
            attributeName="patternTransform"
            type="translate"
            from="0,0"
            to="30,30"
            dur="3s"
            repeatCount="indefinite"
          />
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export { DottedBackground };
export default DottedBackground;
