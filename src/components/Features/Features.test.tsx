import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Features from "./Features";

describe("Features", () => {
  it("renders the section heading", () => {
    render(<Features />);
    expect(screen.getByText("Built for what matters")).toBeInTheDocument();
  });

  it("renders all four features", () => {
    render(<Features />);
    expect(screen.getByText("Only Fixed Costs")).toBeInTheDocument();
    expect(screen.getByText("Income Clarity")).toBeInTheDocument();
    expect(screen.getByText("Per-Wallet Breakdown")).toBeInTheDocument();
    expect(screen.getByText("Emergency Fund")).toBeInTheDocument();
  });
});
