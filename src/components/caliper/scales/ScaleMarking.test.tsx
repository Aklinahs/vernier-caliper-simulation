import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScaleMarking } from "./ScaleMarking";

describe("ScaleMarking", () => {
  it("renders marking at correct position", () => {
    const props = {
      position: 100,
      value: 10,
      type: "main" as const,
    };

    render(<ScaleMarking {...props} />);
    const marking = screen.getByText("10");
    expect(marking).toBeInTheDocument();
  });
});
