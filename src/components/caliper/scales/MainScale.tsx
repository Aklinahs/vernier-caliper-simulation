import React from "react";

export const MainScale: React.FC = () => {
  return (
    <g className="main-scale">
      {/* Basic scale markings */}
      <line
        x1="100"
        y1="200"
        x2="700"
        y2="200"
        stroke="var(--caliper-scale)"
        strokeWidth="2"
      />
      {/* Add basic divisions */}
    </g>
  );
};
