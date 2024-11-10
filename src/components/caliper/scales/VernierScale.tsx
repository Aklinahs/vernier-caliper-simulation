import React from "react";

export const VernierScale: React.FC = () => {
  return (
    <g className="vernier-scale">
      {/* Basic vernier scale */}
      <line
        x1="150"
        y1="220"
        x2="250"
        y2="220"
        stroke="var(--caliper-scale)"
        strokeWidth="2"
      />
      {/* Add basic divisions */}
    </g>
  );
};
