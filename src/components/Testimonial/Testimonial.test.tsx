import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonial from "./Testimonial";

describe("Testimonial", () => {
  it("renders the testimonial quote", () => {
    render(<Testimonial />);
    expect(
      screen.getByText(/Finalmente so esattamente dove vanno i miei soldi/),
    ).toBeInTheDocument();
  });

  it("renders the author", () => {
    render(<Testimonial />);
    expect(
      screen.getByText("Marco R. — Libero professionista"),
    ).toBeInTheDocument();
  });
});
