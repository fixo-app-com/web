import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HowItWorks from "./HowItWorks";

describe("HowItWorks", () => {
  it("renders the section heading", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Come funziona")).toBeInTheDocument();
  });

  it("renders all three steps", () => {
    render(<HowItWorks />);
    expect(screen.getByText("Aggiungi i tuoi conti")).toBeInTheDocument();
    expect(screen.getByText("Crea le categorie")).toBeInTheDocument();
    expect(screen.getByText("Registra le spese fisse")).toBeInTheDocument();
  });
});
