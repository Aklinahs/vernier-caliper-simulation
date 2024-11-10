import React from "react";
import { ScaleMarkingProps } from "@/types/caliper";

export const ScaleMarking: React.FC<ScaleMarkingProps> = ({
  position,
  value,
  type,
  isActive,
}) => {
  const height = type === "main" ? 10 : 8;

  return (
    <g className={`scale-marking ${type} ${isActive ? "active" : ""}`}>
      <line
        x1={position}
        y1={0}
        x2={position}
        y2={height}
        stroke="var(--caliper-scale)"
        strokeWidth={1}
      />
      <text
        x={position}
        y={height + 12}
        textAnchor="middle"
        className="text-xs"
        fill="var(--caliper-scale)"
      >
        {value}
      </text>
    </g>
  );
};
