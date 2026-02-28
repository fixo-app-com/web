import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the copyright with current year", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const year = new Date().getFullYear();
    expect(
      screen.getByText(`© ${year} Fixo. All rights reserved.`),
    ).toBeInTheDocument();
  });

  it("renders a Privacy Policy link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link", { name: "Privacy Policy" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/privacy");
  });

  it("renders a Support link", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link", { name: "Support" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/support");
  });
});
