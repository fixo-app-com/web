import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CallToAction from "./CallToAction";

describe("CallToAction", () => {
  it("renders the heading", () => {
    render(<CallToAction />);
    expect(screen.getByText("Know your real budget")).toBeInTheDocument();
  });

  it("renders the App Store badge", () => {
    render(<CallToAction />);
    expect(screen.getByText("App Store")).toBeInTheDocument();
  });
});
