import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HowItWorks from "./HowItWorks";

describe("HowItWorks", () => {
  it("renders the section heading", () => {
    render(<HowItWorks />);
    expect(screen.getByText("How it works")).toBeInTheDocument();
  });

  it("renders all four steps", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Create your account")).toBeInTheDocument();
    expect(screen.getByText("Add your wallets")).toBeInTheDocument();
    expect(screen.getByText("Enter your fixed costs")).toBeInTheDocument();
    expect(screen.getByText("See the full picture")).toBeInTheDocument();
  });
});
