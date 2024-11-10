// types/caliper.ts
export interface CaliperState {
    currentPosition: number;
    viewMode: "normal" | "zoom";
    zoomLevel: number;
  }
  
  export interface ScaleMarkingProps {
    position: number;
    value: number;
    type: "main" | "vernier";
    isActive?: boolean;
  }