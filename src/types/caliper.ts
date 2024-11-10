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

  // src/types/caliper.ts
export interface ScaleConfig {
  length: number;
  divisions: number;
  unit: 'mm' | 'cm' | 'inch';
  minValue: number;
  maxValue: number;
  markingSpacing?: number;
  labelInterval?: number;
}

export interface ViewConfig {
  mode: 'normal' | 'zoom';
  zoomLevel: number;
}

export interface CaliperMeasurement {
  value: number;
  unit: 'mm' | 'cm' | 'inch';
  precision: number;
}

export interface ScaleContainerProps {
  type: 'main' | 'vernier';
  config: ScaleConfig;
  children: React.ReactNode;
}