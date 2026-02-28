import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(screen.getByText("crystal clear")).toBeInTheDocument();
  });

  it("renders the App Store badge", () => {
    render(<Hero />);
    expect(screen.getByText("App Store")).toBeInTheDocument();
  });
});
