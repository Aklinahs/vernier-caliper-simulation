import { create } from 'zustand';

interface CaliperStore {
  // State
  currentPosition: number;
  viewMode: "normal" | "zoom";
  zoomLevel: number;

  // Actions
  setPosition: (position: number) => void;
  setViewMode: (mode: "normal" | "zoom") => void;
  setZoomLevel: (level: number) => void;
}

export const useCaliperStore = create<CaliperStore>((set) => ({
  currentPosition: 0,
  viewMode: "normal",
  zoomLevel: 1,

  setPosition: (position) => set({ currentPosition: position }),
  setViewMode: (mode) => set({ viewMode: mode }),
  setZoomLevel: (level) => set({ zoomLevel: level }),
}));