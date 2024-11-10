// types/index.ts

// Basic Types
export interface ViewConfig {
    mode: "normal" | "zoom";
    zoomLevel: number;
  }
  
  export interface CaliperState {
    position: number;
    viewConfig: ViewConfig;
  }
  
  export interface BannerConfig {
    type: "construction" | "announcement";
    message: string;
    isVisible: boolean;
  }
  
  export interface BasicError {
    message: string;
    type: "error" | "warning";
  }