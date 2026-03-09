import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Features from "./Features";

describe("Features", () => {
  it("renders the section heading", () => {
    render(<Features />);
    expect(screen.getByText("Why Fixo is different")).toBeInTheDocument();
  });

  it("renders all four features", () => {
    render(<Features />);
    expect(screen.getByText("Every Frequency, One View")).toBeInTheDocument();
    expect(screen.getByText("Set It Once")).toBeInTheDocument();
    expect(screen.getByText("Per-Wallet Clarity")).toBeInTheDocument();
    expect(screen.getByText("Emergency Ready")).toBeInTheDocument();
  });
});
