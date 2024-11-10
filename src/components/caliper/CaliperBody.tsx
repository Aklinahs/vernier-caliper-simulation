import React from "react";
import { MainScale } from "./scales/MainScale";
import { VernierScale } from "./scales/VernierScale";

export const CaliperBody: React.FC = () => {
  return (
    <div className="relative w-full aspect-[2/1]">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Basic caliper body */}
        <rect
          x="100"
          y="150"
          width="600"
          height="100"
          fill="var(--caliper-body)"
        />
        <MainScale />
        <VernierScale />
      </svg>
    </div>
  );
};
