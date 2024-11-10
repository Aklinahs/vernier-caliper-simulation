import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { ScaleMarking } from "@/components/caliper/scales/ScaleMarking";

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
