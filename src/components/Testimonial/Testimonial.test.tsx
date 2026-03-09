import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Testimonial from "./Testimonial";

describe("Testimonial", () => {
  it("renders the first pain point", () => {
    render(<Testimonial />);
    expect(
      screen.getByText(/Surprised by that bill you forgot about/),
    ).toBeInTheDocument();
  });

  it("renders all three pain points", () => {
    render(<Testimonial />);
    expect(
      screen.getByText(/Surprised by that bill you forgot about/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Lost in complex budgets/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Tired of logging every coffee/),
    ).toBeInTheDocument();
  });
});
