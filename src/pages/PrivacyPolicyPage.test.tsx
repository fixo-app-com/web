import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import PrivacyPolicyPage from "./PrivacyPolicyPage";

describe("PrivacyPolicyPage", () => {
  it("renders the page heading", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicyPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Privacy Policy" }),
    ).toBeInTheDocument();
  });

  it("renders key sections", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicyPage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Information We Collect" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Data Storage & Security" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Data Retention & Deletion" }),
    ).toBeInTheDocument();
  });

  it("renders the contact email", () => {
    render(
      <MemoryRouter>
        <PrivacyPolicyPage />
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
});
