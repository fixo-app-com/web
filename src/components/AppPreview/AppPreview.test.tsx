import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AppPreview from "./AppPreview";

describe("AppPreview", () => {
  it("renders the total amount", () => {
    render(<AppPreview />);
    expect(screen.getByText("Spese fisse mensili")).toBeInTheDocument();
  });

  it("renders all categories", () => {
    render(<AppPreview />);
    expect(screen.getByText("Casa")).toBeInTheDocument();
    expect(screen.getByText("Trasporti")).toBeInTheDocument();
    expect(screen.getByText("Abbonamenti")).toBeInTheDocument();
    expect(screen.getByText("Assicurazioni")).toBeInTheDocument();
  });

  it("renders all accounts", () => {
    render(<AppPreview />);
    expect(screen.getByText("Conto Principale")).toBeInTheDocument();
    expect(screen.getByText("Conto Secondario")).toBeInTheDocument();
  });
});
