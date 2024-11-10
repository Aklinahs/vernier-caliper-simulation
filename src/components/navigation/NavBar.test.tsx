import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "@/components/navigation/NavBar";

describe("NavBar", () => {
  it("renders navigation links", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});
