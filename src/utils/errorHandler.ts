export enum ErrorType {
    NAVIGATION = "navigation",
    SCALE = "scale",
    MEASUREMENT = "measurement",
    SYSTEM = "system",
  }
  
  export interface ErrorConfig {
    type: ErrorType;
    message: string;
    severity: "error" | "warning" | "info";
    code?: string;
  }
  
  export const handleError = (error: ErrorConfig) => {
    console.error(`[${error.type}] ${error.code || ""}: ${error.message}`);
    
    // Error reporting logic
    if (error.severity === "error") {
      // Show error UI
    }
  };