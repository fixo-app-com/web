import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the logo image", () => {
    render(<Navbar />);
    expect(screen.getByAltText("Fixo")).toBeInTheDocument();
  });

  it("renders the download link", () => {
    render(<Navbar />);
    expect(screen.getByText("Download")).toBeInTheDocument();
  });
});
