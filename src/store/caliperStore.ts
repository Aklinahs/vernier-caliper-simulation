import create from 'zustand';

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

export const useCaliperStore = create<CaliperStore>((set: (arg0: { currentPosition?: any; viewMode?: any; zoomLevel?: any; }) => any) => ({
  currentPosition: 0,
  viewMode: "normal",
  zoomLevel: 1,

  setPosition: (position: any) => set({ currentPosition: position }),
  setViewMode: (mode: any) => set({ viewMode: mode }),
  setZoomLevel: (level: any) => set({ zoomLevel: level }),
}));