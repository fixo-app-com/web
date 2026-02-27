import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(screen.getByText("spendi ogni mese?")).toBeInTheDocument();
  });

  it("renders both CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Prova Fixo Gratis")).toBeInTheDocument();
    expect(screen.getByText("Scopri di più")).toBeInTheDocument();
  });
});
