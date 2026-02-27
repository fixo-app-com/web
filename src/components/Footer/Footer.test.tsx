import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the brand name", () => {
    render(<Footer />);
    expect(screen.getByText("fixo")).toBeInTheDocument();
  });

  it("renders the copyright with current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} Fixo. Tutti i diritti riservati.`),
    ).toBeInTheDocument();
  });
});
