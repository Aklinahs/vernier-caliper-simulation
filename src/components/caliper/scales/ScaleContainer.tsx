import React from "react";
import { ScaleConfig } from "@/types/caliper";

interface ScaleContainerProps {
  type: "main" | "vernier";
  config: ScaleConfig;
  children: React.ReactNode;
}

export const ScaleContainer: React.FC<ScaleContainerProps> = ({
  type,
  config,
  children,
}) => {
  return (
    <g className={`scale-container ${type}`}>
      {/* Scale background */}
      <rect
        className="scale-background"
        x={0}
        y={0}
        width={config.length}
        height={type === "main" ? 40 : 30}
        fill="var(--caliper-scale)"
      />
      {children}
    </g>
  );
};
