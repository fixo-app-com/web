import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CallToAction from "./CallToAction";

describe("CallToAction", () => {
  it("renders the heading", () => {
    render(<CallToAction />);
    expect(
      screen.getByText("Inizia a usare Fixo oggi"),
    ).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<CallToAction />);
    expect(screen.getByText("Prova Fixo Gratis")).toBeInTheDocument();
  });
});
