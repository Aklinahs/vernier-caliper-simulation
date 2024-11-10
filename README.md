# Vernier Caliper Simulation

An interactive web application for learning and practicing vernier caliper measurements.

## Setup Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher)

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd vernier-caliper-simulation

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage
```

## Project Structure

```
src/
├── components/             # React components
│   ├── caliper/           # Caliper-specific components
│   │   ├── scales/        # Scale components
│   │   └── measurement/   # Measurement components
│   ├── layout/            # Layout components
│   └── ui/               # Common UI components
├── routes/                # Route components
├── store/                # State management
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── hooks/                # Custom React hooks
```

## Core Components

### CaliperBody

The main component that renders the vernier caliper visualization.

```tsx
import { CaliperBody } from "./components/caliper/CaliperBody";

// Usage
<CaliperBody />;
```

### ScaleMarking

Component for rendering individual scale markings.

```tsx
import { ScaleMarking } from "./components/caliper/scales/ScaleMarking";

// Usage
<ScaleMarking position={100} value={10} type="main" isActive={false} />;
```

## Type Definitions

### Core Types

```typescript
interface CaliperState {
  currentPosition: number;
  viewMode: "normal" | "zoom";
  zoomLevel: number;
}

interface ScaleMarkingProps {
  position: number;
  value: number;
  type: "main" | "vernier";
  isActive?: boolean;
}

interface ScaleConfig {
  length: number;
  divisions: number;
  unit: string;
  minValue: number;
  maxValue: number;
}
```

## Error Handling

The application uses a centralized error handling system:

```typescript
import { handleError, ErrorType } from "./utils/errorHandler";

// Usage
handleError({
  type: ErrorType.MEASUREMENT,
  message: "Invalid measurement value",
  severity: "error",
});
```

## State Management

The application uses Zustand for state management:

```typescript
import { useCaliperStore } from "./store/caliperStore";

// Usage
const { currentPosition, setPosition } = useCaliperStore();
```
