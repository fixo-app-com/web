import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AppPreview from "./AppPreview";

describe("AppPreview", () => {
  it("renders the section heading", () => {
    render(<AppPreview />);
    expect(screen.getByText("Everything at a glance")).toBeInTheDocument();
  });

  it("renders phone screen content", () => {
    render(<AppPreview />);
    expect(screen.getAllByText("Housing").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Transport").length).toBeGreaterThanOrEqual(1);
    expect(
      screen.getAllByText("Subscriptions").length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("renders slider dots on mobile", () => {
    render(<AppPreview />);
    expect(
      screen.getByLabelText("View Home screen"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("View Wallets screen"),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("View Emergency Fund screen"),
    ).toBeInTheDocument();
  });
});
