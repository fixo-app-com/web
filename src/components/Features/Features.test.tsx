import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Features from "./Features";

describe("Features", () => {
  it("renders the section heading", () => {
    render(<Features />);
    expect(screen.getByText("Tutto quello che ti serve")).toBeInTheDocument();
  });

  it("renders all four features", () => {
    render(<Features />);
    expect(screen.getByText("Spese Fisse")).toBeInTheDocument();
    expect(screen.getByText("Macro Categorie")).toBeInTheDocument();
    expect(screen.getByText("Conti Bancari")).toBeInTheDocument();
    expect(screen.getByText("Totale & Ripartizione")).toBeInTheDocument();
  });
});
