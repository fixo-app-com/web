import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HowItWorks from "./HowItWorks";

describe("HowItWorks", () => {
  it("renders the section heading", () => {
    render(<HowItWorks />);
    expect(screen.getByText("How it works")).toBeInTheDocument();
  });

  it("renders all three steps", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Name your wallets")).toBeInTheDocument();
    expect(screen.getByText("Organize by category")).toBeInTheDocument();
    expect(screen.getByText("See your real picture")).toBeInTheDocument();
  });
});
