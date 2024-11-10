// types/navigation.ts
export interface Route {
    path: string;
    title: string;
    component: React.ComponentType;
  }
  
  export interface NavigationState {
    currentRoute: string;
    history: string[];
  }