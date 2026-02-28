import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import SupportPage from "./SupportPage";

describe("SupportPage", () => {
  it("renders the page heading", () => {
    render(
      <MemoryRouter>
        <SupportPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Support" }),
    ).toBeInTheDocument();
  });

  it("renders the contact email", () => {
    render(
      <MemoryRouter>
        <SupportPage />
      </MemoryRouter>,
    );
    const emailLinks = screen.getAllByRole("link", {
      name: "support@fixoapp.com",
    });
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks[0]).toHaveAttribute(
      "href",
      "mailto:support@fixoapp.com",
    );
  });

  it("renders account deletion information", () => {
    render(
      <MemoryRouter>
        <SupportPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Account Deletion" }),
    ).toBeInTheDocument();
  });

  it("renders a link to the privacy policy", () => {
    render(
      <MemoryRouter>
        <SupportPage />
      </MemoryRouter>,
    );
    const link = screen.getByRole("link", { name: "Privacy Policy" });
    expect(link).toHaveAttribute("href", "/privacy");
  });
});
