import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/vernier-caliper-simulation/', // Add this line - should match your repository name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    css: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});

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

export interface CaliperState {
  currentPosition: number;
  viewConfig: ViewConfig;
}

export interface ScaleMarkingProps {
  position: number;
  value: number;
  type: 'main' | 'vernier';
  isActive?: boolean;
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