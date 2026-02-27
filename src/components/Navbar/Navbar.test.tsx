import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("fixo")).toBeInTheDocument();
  });

  it("renders the CTA link", () => {
    render(<Navbar />);
    expect(screen.getByText("Inizia Gratis")).toBeInTheDocument();
  });
});
